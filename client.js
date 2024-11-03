window.pokiBlockSDK = {}
let connection

window.pokiBlockSDK.ERROR = "pokiBlockSDKError"
window.pokiBlockSDK.SENT = "pokiBlockSDKSent"
window.pokiBlockSDK.INIT = "pokiBlockSDKInit"

/**
 * Initializes the PokiBlock SDK connection.
 * @return {Promise<{type: "pokiBlockSDKInit" | "pokiBlockSDKError", open?: boolean, error?: Error}>}
 * Resolves with an object containing a type key, which is always "pokiBlockSDKInit".
 * If the connection was successfully opened, the open key is present and true.
 * If an error occurred during initialization, the error key is present and contains the error.
 */
window.pokiBlockSDK.init = () => {
    return new Promise(resolve => {
        try {
            connection = new WebSocket("ws://localhost:1765")
            connection.addEventListener("open", () => {
                resolve({"type": "pokiBlockSDKInit", "open": connection.readyState === connection.OPEN})
            })
        } catch (error) {
            console.log(error)
            resolve({"type": "pokiBlockSDKError", "error": error})
        }
    })
}

window.pokiBlockSDK.blocked = async () => {
    try {
        connection.send("blocked")
        return {"type": "pokiBlockSDKSent"}
    } catch (error) {
        console.log(error)
        return {"type": "pokiBlockSDKError", "error": error}
    }
}

window.pokiBlockSDK.gameStarted = async () => {
    try {
        connection.send("gameStarted")
        return {"type": "pokiBlockSDKSent"}
    } catch (error) {
        console.log(error)
        return {"type": "pokiBlockSDKError", "error": error}
    }
}

window.pokiBlockSDK.gameEnded = async () => {
    try {
        connection.send("gameEnded")
        return {"type": "pokiBlockSDKSent"}
    } catch (error) {
        console.log(error)
        return {"type": "pokiBlockSDKError", "error": error}
    }
}