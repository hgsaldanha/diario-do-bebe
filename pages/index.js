import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { SimpleGrid } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import { Basic, Extras } from "../components/basic";

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
