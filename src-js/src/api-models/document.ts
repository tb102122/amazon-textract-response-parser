/**
 * Document processing Textract API models used by the Textract Response Parser.
 *
 * This file collects types/interfaces specific to Textract's overall "document" APIs (rather than
 * e.g. Expense and Identity, or the individual components like Forms/Queries/Tables)
 *
 * See: https://docs.aws.amazon.com/textract/latest/dg/how-it-works-document-layout.html
 */
// Local Dependencies:
import { ApiBlockBase, ApiBlockType, ApiChildRelationship } from "./base";
import { ApiLineBlock, ApiSelectionElementBlock, ApiSignatureBlock, ApiWordBlock } from "./content";
import { ApiKeyBlock, ApiKeyValueSetBlock, ApiValueBlock } from "./form";
import { ApiGeometry } from "./geometry";
import { ApiLayoutBlock } from "./layout";
import { ApiQueryBlock, ApiQueryResultBlock } from "./query";
import {
  ApiCellBlock,
  ApiMergedCellBlock,
  ApiTableBlock,
  ApiTableFooterBlock,
  ApiTableTitleBlock,
} from "./table";

// Temporary re-exports for consistency with old API:
export {
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiRelationshipType,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiAnswerRelationship,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiChildRelationship,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiComplexFeaturesRelationship,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiMergedCellRelationship,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiValueRelationship,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiRelationship,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiBlockType,
} from "./base";
export {
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiTextType,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiWordBlock,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiLineBlock,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiSelectionStatus,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiSelectionElementBlock,
} from "./content";
export {
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiKeyValueEntityType,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiKeyValueSetBlock,
} from "./form";
export {
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiQueryBlock,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiQueryResultBlock,
} from "./query";
export {
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiTableEntityType,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiTableBlock,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiTableCellEntityType,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiCellBlock,
  /**
   * @deprecated Please import direct from top-level TRP.js
   */
  ApiMergedCellBlock,
} from "./table";

/**
 * Block representing an overall page within a (potentially multi-page) document
 */
export interface ApiPageBlock extends ApiBlockBase {
  BlockType: ApiBlockType.Page;
  Geometry: ApiGeometry; // Always present for PAGE blocks
  /**
   * Top-level content contained within this page
   *
   * (These Blocks may in turn link to further sub-levels e.g. from TABLE to CELL)
   */
  readonly Relationships?: ApiChildRelationship[];
}

/**
 * Type describing actual 'Block' objects returnable by Textract general document analysis
 *
 * See: https://docs.aws.amazon.com/textract/latest/dg/API_Block.html
 */
export type ApiBlock =
  | ApiCellBlock
  | ApiKeyBlock
  | ApiKeyValueSetBlock
  | ApiLayoutBlock
  | ApiLineBlock
  | ApiMergedCellBlock
  | ApiPageBlock
  | ApiQueryBlock
  | ApiQueryResultBlock
  | ApiSelectionElementBlock
  | ApiSignatureBlock
  | ApiTableBlock
  | ApiTableFooterBlock
  | ApiTableTitleBlock
  | ApiValueBlock
  | ApiWordBlock;
