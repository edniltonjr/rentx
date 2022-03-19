import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImporCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstace();

const importCategoryUseCase = new ImporCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
