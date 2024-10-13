"use server";

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function createUser(
  _prevState: any, 
  formData: FormData
) {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    body: formData,
  });
  const parsedResponse = await response.json();

  console.log(parsedResponse, 'qweqwewq')

  if (!response.ok) {
    console.log(parsedResponse);
    return { error: '' };
  } 
  redirect('/');
}