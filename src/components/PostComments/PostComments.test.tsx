import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
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
        // debug();
        expect(screen.getByText("Que miniatura foda.")).toBeInTheDocument();
    });
});
