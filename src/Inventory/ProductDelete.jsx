import { redirect } from "react-router-dom";
import { deleteProduct } from "../additionalFunction";

export async function action({ params }) {
  console.log('Deleting Customer');

  await deleteProduct(params.customerId);
  return redirect("/inventory");
}