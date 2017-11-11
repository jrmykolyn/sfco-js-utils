# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [0.2.0] - 2017-11-10
### Added
- Added `#sampleIndex` method to `ArrayUtils` submodule.
- Added tests for `#sampleIndex`.

### Changed
- Fixed `0.1.0` release notes in `CHANGELOG.md`.
- Completed minor fixes to `#sample` method tests.
- Refactored `#sample()` (now uses `#sampleIndex` under the hood).

## [0.1.0] - 2017-05-11
### Added
- Added `README`, `.editorconfig`, `.gitignore`, and `CHANGELOG` files to project.
- Created `ArrayUtils` submodule (`lib/array-utils.js`), exposed `#sample` method.
- Built out module entry point (`index.js`), exposed `ArrayUtils` submodule.
- Added `jasmine` testing framework to project dev. dependencies.
- Built out tests for `ArrayUtils` and `ArrayUtils#sample`.
