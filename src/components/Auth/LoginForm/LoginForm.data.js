/** @format */

import * as Yup from "yup";

export function initialValues() {
	return {
		email: "",
		password: "",
	};
}

export function validationSchema() {
	return Yup.object({
		email: Yup.string()
			.email("El email no es válido")
			.required("Este campo es obligatorio"),
		password: Yup.string().required("Este campo es obligatoria"),
	});
}
