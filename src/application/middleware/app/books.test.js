import { LOAD_BOOKS } from "../../actions/book.actions";
import booksMiddleware from "./books.middleware";


describe("Books middleware", () => {
	describe("load Books flow", () => {
		const [loadBooksFlow] = booksMiddleware;

		const dummyBook = {
			isbn: "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
			"title": "Henri Potier à l'école des sorciers",
			"price": 35,
			"cover": "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
			"synopsis": [
				"Après la mort de ses parents (Lily et James Potier)"]
		};
		// const api = {
		// 	books: {
		// 		getAll: { url: "test.com", method: "GET" }
		// 	},
		// };
		const api = jest.fn();
		const dispatch = jest.fn();
		const next = jest.fn();
		const action = {
			type: LOAD_BOOKS,
		};

		it("passes action to next middleware", async () => {
			await loadBooksFlow({ api })({ dispatch })(next)(action);

			expect(next).toHaveBeenCalledWith(action);
		});

		// it("calls api at least once", async () => {
		// 	await loadBooksFlow({ api })({ dispatch })(next)(action);

		// 	expect(api).toHaveBeenCalledWith("[books] load");
		// });


	});
});
