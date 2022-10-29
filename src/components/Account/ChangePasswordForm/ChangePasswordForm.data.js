/** @format */

import * as Yup from "yup";

export function initialValues() {
	return {
		password: "",
		newPassword: "",
		confirmNewPassword: "",
	};
}

export function validationSchema() {
	return Yup.object({
		password: Yup.string().required("La contraseña es obligatoria"),
		newPassword: Yup.string()
			.required("La nueva contraseña es obligatoria")
			.min(8, "La nueva contraseña debe tener al menos 8 caracteres"),
		confirmNewPassword: Yup.string()
			.required("La confirmación de la nueva contraseña es obligatoria")
			.oneOf([Yup.ref("newPassword"), null], "Las contraseñas no coinciden"),
	});
}
