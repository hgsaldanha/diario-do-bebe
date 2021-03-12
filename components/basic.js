import { FormLabel } from "@chakra-ui/form-control";
import { FormErrorMessage } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field } from "formik";

export const Basic = () => {
  return (
    <>
      <Field name="inicio">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.inicio && form.touched.inicio}>
            <FormLabel htmlFor="inicio">Início</FormLabel>
            <Input {...field} id="inicio" placeholder="Início" />
            <FormErrorMessage>{form.errors.inicio}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="fim">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.fim && form.touched.fim}>
            <FormLabel htmlFor="fim">Fim</FormLabel>
            <Input {...field} id="fim" placeholder="Fim" />
            <FormErrorMessage>{form.errors.fim}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </>
  );
};
