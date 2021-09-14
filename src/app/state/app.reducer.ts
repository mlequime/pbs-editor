import { Action, createAction, createReducer, on, props, State } from "@ngrx/store";
import { ParserService } from "../parser.service";

export const initialState: object = {
    loading: true,
    pokemon: undefined
}

export const load = createAction("[Main] Load Data", props<{flags: string[]}>());

export const editorReducer = createReducer(
    initialState,

    on(load, (state, action) => {
        return {
            loading: false,
            pokemon: []
        }
    })

)