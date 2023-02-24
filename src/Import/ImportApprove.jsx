import { redirect } from "react-router-dom";
import { approveImport } from "../additionalFunction";

export async function action({ params }) {
  console.log('Approving Order');

  await approveImport(params.customerId);
  return redirect("/import");
}