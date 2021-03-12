import { Button } from "@chakra-ui/button";
import { FormErrorMessage } from "@chakra-ui/form-control";
import { FormLabel } from "@chakra-ui/form-control";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Field, Form, Formik } from "formik";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container>
      <Formik
        initialValues={{ evento: 1, inicio: "", fim: "" }}
        onSubmit={(values, actions) => {
          console.log(actions);
        }}
      >
        {(props) => (
          <Form>
            <SimpleGrid>
              <Heading as="h1" mb={2}>Novo evento</Heading>
              <Field component={Select} name="evento">
                <option value={1}>Amamentação</option>
                <option value={2}>Sono</option>
              </Field>
              <Field name="inicio">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.inicio && form.touched.inicio}
                  >
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
