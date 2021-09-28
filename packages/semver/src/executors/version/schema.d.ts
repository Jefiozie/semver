import { TargetConfiguration } from "@nrwl/devkit";

/**
 * Specify a target to run after a new version was successfully created.
 * @example "@jscutlery/semver:push" | { "executor": "@jscutlery/semver:push" }
 */
export type PostTargetSchema = string | TargetConfiguration;

export interface VersionBuilderSchema {
  dryRun?: boolean;
  noVerify?: boolean;
  /**
   * @deprecated Use postTargets instead.
   * @sunset 4.0.0
   */
  push?: boolean;
  remote?: string;
  baseBranch?: string;
  syncVersions?: boolean;
  skipRootChangelog?: boolean;
  skipProjectChangelog?: boolean;
  version?: 'patch' | 'minor' | 'major' | 'premajor' | 'preminor' | 'prepatch' | 'prerelease';
  preid?: string;
  changelogHeader?: string;
  versionTagPrefix?: string;
  postTargets: PostTargetSchema[];
}
