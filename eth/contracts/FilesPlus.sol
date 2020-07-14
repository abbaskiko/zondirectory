// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity ^0.6.0;

import './Files.sol';

contract FilesPlus {
    Files files;

    constructor(Files _files) public {
        files = _files;
    }

    function createItem(string calldata _title,
                        string calldata _description,
                        uint256 _priceETH,
                        uint256 _priceAR,
                        string calldata _locale,
                        string calldata _license,
                        uint[] calldata _categories,
                        uint256[] calldata _votes) external
    {
        files.createItem(_title, _description, _priceETH, _priceAR, _locale, _license);
    }

    function createLink(string calldata _link,
                        string calldata _title,
                        string calldata _description,
                        string calldata _locale,
                        uint256 _linkKind,
                        bool _owned,
                        uint[] calldata _categories,
                        uint256[] calldata _votes) external
    {
        files.createLink(_link, _title, _description, _locale, _linkKind, _owned);
    }

    function createCategory(string calldata _title,
                            string calldata _locale,
                            bool _owned,
                            uint[] calldata _categories,
                            uint256[] calldata _votes) external
    {
        files.createCategory(_title, _locale, _owned);
    }
}