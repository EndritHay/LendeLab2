
export const registerNewUser = async (formData) => {

//e perdorim si funksion per te regjistru userat e ri nga register/index.js

    try {

        const response = await fetch("/api/register" ,{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(formData)
        });

        const finalData = response.json()
        
        return finalData;

    } catch (e) {
        console.log("error", e);
    }
};