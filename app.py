from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load a Hugging Face conversational pipeline
conversation_pipeline = pipeline("conversational", model="microsoft/DialoGPT-medium")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    
    # Generate a response using the model
    response = conversation_pipeline(user_message)
    bot_message = response[0]["generated_text"]
    
    return jsonify({"reply": bot_message})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
