/** @format */

import * as Yup from "yup";

export function initialValues() {
	return {
		email: "",
		password: "",
		repeatPassword: "",
	};
}

export function validationSchema() {
	return Yup.object({
		email: Yup.string()
			.email("El email no es válido")
			.required("Este campo es obligatorio"),
		password: Yup.string()
			.required("Este campo es obligatoria")
			.min(8, "La contraseña debe tener al menos 8 caracteres"),
		repeatPassword: Yup.string()
			.required("Este campo es obligatoria")
			.oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
	});
}
