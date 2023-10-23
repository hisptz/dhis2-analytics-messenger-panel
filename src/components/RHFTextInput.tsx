import {FieldValues, Path, useController} from "react-hook-form";
import {TextField, TextFieldProps} from "@mui/material";

export interface RHFTextInputProps extends Omit<TextFieldProps<"outlined">, "helperText" | "error" | "variant"> {
		name: string;
}

export function RHFTextInput<T extends FieldValues>({name, ...props}: RHFTextInputProps) {
		const {field, fieldState} = useController<T>({
				name: name as Path<T>
		})

		return (
				<TextField
						{...props}
						{...field}
						required
						fullWidth
						variant="outlined"
						error={!!fieldState.error}
						helperText={fieldState?.error?.message ?? ""}
				/>
		)
}
