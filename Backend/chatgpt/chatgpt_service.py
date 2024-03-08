import openai

openai.api_key = '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'


def generate_response(prompt):
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",
        prompt=prompt,
        max_tokens=150,
        temperature=0.7,
    )

    return response.choices[0].text.strip()