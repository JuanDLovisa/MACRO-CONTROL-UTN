import dotenv from "dotenv"
dotenv.config()

const APP_ID = process.env.NX_APP_ID
const APP_KEY = process.env.NX_APP_KEY

console.log(APP_ID)
console.log(APP_KEY)

async function obtenerNutrientes(textoComida) {
  const url = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-app-id': APP_ID,
      'x-app-key': APP_KEY
    },
    body: JSON.stringify({ query: textoComida })
  });

  if (!resp.ok) {
    const msg = await resp.text();
    throw new Error(`Error API Nutritionix: ${resp.status} - ${msg}`);
  }

  const data = await resp.json();
  // data.foods es un array; cada item tiene calories, nf_total_fat, nf_protein, nf_total_carbohydrate, etc.
  return data.foods.map(f => ({
    /*name: f.food_name,
    calories: f.nf_calories,
    protein_g: f.nf_protein,
    fat_g: f.nf_total_fat,
    carbs_g: f.nf_total_carbohydrate,
    serving_qty: f.serving_qty,
    serving_unit: f.serving_unit,
    serving_weight_grams: f.serving_weight_grams*/
    f
  }));
}

// Uso de ejemplo
obtenerNutrientes('45g de manzana')
  .then(resultados => console.log(resultados))
  .catch(err => console.error(err.message));