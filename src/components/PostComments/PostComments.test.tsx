import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
    it("Deve renderizar o componente corretamente", () => {
        render(<PostComment />);
        expect(screen.getByText("Comentar")).toBeInTheDocument();
    });

    test("Deve adicionar 2 comentários no post", () => {
        render(<PostComment />);
        // const { debug } = render(<PostComment />);
        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: {
                value: "Que miniatura foda.",
            },
        });
        fireEvent.click(screen.getByTestId("btn-cadastrar"));

        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: {
                value: "O batmóvel do Keaton é foda.",
            },
        });
        fireEvent.click(screen.getByTestId("btn-cadastrar"));

        // debug();
        // expect(screen.getByText("Que miniatura foda.")).toBeInTheDocument();
        expect(screen.getAllByTestId("lista-comentarios")).toHaveLength(2);
    });
});
