pragma solidity >0.6.0;

import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";

contract MySolution 
{
    function depositSomeTokens() public {
        address token = 0x2Ec4c6fCdBF5F9beECeB1b51848fc2DB1f3a26af;
        address to = 0x3728576d79D5AA5E5E5c00d7C411A02A8F051ab8;
        address pool = 0xE039BdF1d874d27338e09B55CB09879Dedca52D8;

        IPool(pool).supply(token, 1000, to, 0);
    }

	function withdrawSomeTokens() external {

    }

	function borrowSomeTokens() external {

    }

    function repaySomeTokens(address pool, address token, address user, uint256 amount) public {
        IPool(pool).supply(token, amount, user, 0);
    }

	function doAFlashLoan() external {

    }

	function repayFlashLoan() external {

    }
}