import { FormLabel } from "@chakra-ui/form-control";
import { FormErrorMessage } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { useRadio } from "@chakra-ui/radio";
import { useRadioGroup } from "@chakra-ui/radio";
import { Field } from "formik";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

function DateTime() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Hora:"
      dateFormat="dd/MM/yyyy HH:mm"
      showTimeInput
    />
  );
}

export function Basic() {
  return (
    <>
      <Field name="inicio">
        {({ field, form }) => (
          <FormControl isInvalid={form.errors.inicio && form.touched.inicio}>
            <FormLabel htmlFor="inicio">Início</FormLabel>
            <DateTime {...field} id="inicio" placeholder="Início" />
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
}

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export function Extras({ options, onChange }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "extras",
    onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
