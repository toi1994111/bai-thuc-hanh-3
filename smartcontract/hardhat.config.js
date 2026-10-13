require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.7",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com", // Đã đổi sang link máy chủ mới ổn định hơn
      chainId: 11155111,
      accounts: ['6828af7ac3288adf154f82805a7521645c916fc2bb331449a614faddf0f0afa6'] // Dán lại Private Key ví MetaMask của bạn vào đây
    }
  }
};