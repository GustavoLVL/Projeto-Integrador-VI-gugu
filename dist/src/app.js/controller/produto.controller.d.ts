import type { Request, Response } from "express";
declare function listar(req: Request, res: Response): Response<any, Record<string, any>>;
declare function buscarPorId(req: Request, res: Response): Response<any, Record<string, any>>;
declare function criar(req: Request, res: Response): Response<any, Record<string, any>>;
declare const _default: {
    listar: typeof listar;
    buscarPorId: typeof buscarPorId;
    criar: typeof criar;
};
export = _default;
//# sourceMappingURL=produto.controller.d.ts.map