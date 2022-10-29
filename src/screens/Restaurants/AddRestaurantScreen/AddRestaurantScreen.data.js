/** @format */

import * as Yup from "yup";

export function initialValues() {
	return {
		name: "",
		address: "",
		description: "",
		phone: "",
		email: "",
		location: null,
		images: [],
	};
}

export function validationSchema() {
	return Yup.object({
		name: Yup.string().required("Este campo es obligatorio"),
		address: Yup.string().required("Este campo es obligatorio"),
		description: Yup.string().required("Este campo es obligatorio"),
		phone: Yup.string()
			.required("Este campo es obligatorio")
			.max(8, "El teléfono debe tener 8 dígitos")
			.min(8, "El teléfono debe tener 8 dígitos"),
		email: Yup.string()
			.email("No es un email válido")
			.required("Este campo es obligatorio"),
		location: Yup.object().required("La ubicación es obligatoria"),
		images: Yup.array()
			.min(1, "Se requiere al menos una imagen")
			.required("La imagen es requerida"),
	});
}
