import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { useRadioGroup } from "@chakra-ui/radio";
import { useRadio } from "@chakra-ui/radio";
import { Field, Form, Formik } from "formik";
import { Basic } from "../components/basic";

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

function Extras({ options, onChange }) {
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

export default function Home() {
  return (
    <Container>
      <Formik
        initialValues={{ evento: 1, inicio: "", fim: "", extras: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid>
              <Heading as="h2" mb={2}>
                Amamentação
              </Heading>
              <Basic />
              <Heading as="h3" size="md">
                Seio
              </Heading>
              <Extras
                options={["Esquerda", "Direita", "Ambos"]}
                onChange={(value) => props.setFieldValue("extras", value)}
              />
              <Button type="submit" mt={4} size="lg" colorScheme="blue">
                Salvar
              </Button>
            </SimpleGrid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
