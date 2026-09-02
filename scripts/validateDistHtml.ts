/**
 * Entry point for the dist-HTML audit.
 *
 * The full audit logic lives in `scripts/dist-audit/`. This file is a
 * thin shim that calls the runner so the script can be invoked directly
 * via `bun run scripts/validateDistHtml.ts` or `node --import tsx`.
 */
import { runCliAudit } from "./dist-audit/runner";

runCliAudit();
