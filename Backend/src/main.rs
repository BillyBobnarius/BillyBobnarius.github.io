use axum::{routing::post, Json, Router};
use mlua::{Lua, Table};
use serde::{Deserialize, Serialize};
use std::net::SocketAddr;

// Define the structure of the incoming API request
#[derive(Deserialize)]
struct ApiRequest {
    name: String,
}

// Define the structure of the response sent back to the frontend
#[derive(Serialize)]
struct ApiResponse {
    message: String,
}

#[tokio::main]
async fn main() {
    // Define our API route
    let app = Router::new().route("/process", post(handle_lua_logic));

    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Backend listening on http://{}", addr);
    
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn handle_lua_logic(Json(payload): Json<ApiRequest>) -> Json<ApiResponse> {
    // 1. Initialize Lua
    let lua = Lua::new();

    // 2. Define the Lua script (This could also be loaded from an external .lua file)
    let lua_script = r#"
        function process_greeting(name)
            return "Hello, " .. name .. " from the Lua VM!"
        end
    "#;

    // 3. Execute the script and call the function
    let result: String = lua.load(lua_script)
        .eval()
        .and_then(|_| {
            let globals = lua.globals();
            let func: mlua::Function = globals.get("process_greeting")?;
            func.call(payload.name)
        })
        .unwrap_or_else(|e| format!("Lua Error: {}", e));

    Json(ApiResponse { message: result })
}