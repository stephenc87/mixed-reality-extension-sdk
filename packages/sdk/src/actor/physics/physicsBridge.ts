/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Guid } from "../../util";
import { TransformLike } from "..";

export type PhysicsBridgeTransformUpdate = {
    id: Guid;
    time: number;
    transformCount: number;
    flags: number;
    transformsBlob: string;
}

export interface PhysicsServerOneTransformsUpdate {
	local: TransformLike;
    app: TransformLike;
    id: Guid;
}

export type PhysicsUploadServerTransformsUpdate = {
    id: Guid;
    transformCount: number;
    transformsArray: PhysicsServerOneTransformsUpdate[];
}
