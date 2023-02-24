import { redirect } from "react-router-dom";
import { approveOrder } from "../additionalFunction";

export async function action({ params }) {
  console.log('Approving Order');

  await approveOrder(params.customerId);
  return redirect("/order");
}