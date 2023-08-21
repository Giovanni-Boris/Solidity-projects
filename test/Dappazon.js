const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
  let dappazon, deployer, buyer
  beforeEach(async()=>{
     //Set up Accounts
  [deployer, buyer] = await ethers.getSigners()
    //deploy contract
    const Dappazon = await ethers.getContractFactory("Dappazon")
    dappazon = await Dappazon.deploy()
  })

  describe("Deployment", () => {
    it('Sets the owner', async()=>{
      expect(await dappazon.owner()).to.equal(deployer.address)
    })

  })
})
 