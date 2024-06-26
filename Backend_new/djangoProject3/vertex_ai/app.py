import vertexai
from vertexai.language_models import TextGenerationModel


def cv_model_predict(query):
    vertexai.init(project="267233172569", location="europe-west2")
    parameters = {
        "candidate_count": 1,
        "max_output_tokens": 1024,
        "temperature": 0.2,
        "top_p": 0.8,
        "top_k": 40
    }
    model = TextGenerationModel.from_pretrained("text-bison@001")
    model = model.get_tuned_model("projects/267233172569/locations/europe-west2/models/6937540139266605056")

    response = model.predict(
        f""" {query} Is this applicant is suitable for the backend developer position?""",
        **parameters
    )

    return response.text


def offDay_model_predict(query, used_off_days):
    vertexai.init(project="267233172569", location="europe-west2")
    parameters = {
        "candidate_count": 1,
        "max_output_tokens": 1024,
        "temperature": 0.2,
        "top_p": 0.8,
        "top_k": 40
    }
    model = TextGenerationModel.from_pretrained("text-bison@001")
    model = model.get_tuned_model("projects/267233172569/locations/europe-west2/models/5338762271550078976")
    response = model.predict(
        f"""Daha önce alınan izin gün sayısı:{used_off_days} , şu anki izin isteği:{21} , Yönetici izni: Gerekli""",
        **parameters
    )
    return response.text


def calendar_predict(query):
    vertexai.init(project="267233172569", location="europe-west2")
    parameters = {
        "candidate_count": 1,
        "max_output_tokens": 1024,
        "temperature": 0.2,
        "top_p": 0.8,
        "top_k": 40
    }
    model = TextGenerationModel.from_pretrained("text-bison@001")
    model = model.get_tuned_model("projects/267233172569/locations/europe-west2/models/2155843234905980928")
    response = model.predict(
        """Zehra Koç pazartesi saat 9:00 da nerede olma ihtimali yüksek""",
        **parameters
    )
    print(f"Response from Model: {response.text}")
    return response.text



