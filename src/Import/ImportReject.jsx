import { redirect } from "react-router-dom";
import { rejectImport } from "../additionalFunction";

export async function action({ params }) {
  console.log('Rejecting Import');

  await rejectImport(params.customerId);
  return redirect("/import");
}