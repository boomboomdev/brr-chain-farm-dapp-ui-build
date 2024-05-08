"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[734],{2734:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(3696),o=n(5156),s=n(8599),i=n(2540);function r(){var e;const{allPools:t,user_token_accounts:n}=(0,o.e)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.sR,{title:"Farming Admin",subtitle:"",children:[(0,i.jsx)(u,{}),!t.isLoading&&t.data&&(null==(e=t.data)?void 0:e.map(((e,t)=>{var a;const o=null==(a=n.data)?void 0:a.value.find((t=>{var n;return(null==(n=t.account.data)||null==(n=n.parsed)||null==(n=n.info)?void 0:n.mint)==e.account.stakingMint.toString()}));return(0,i.jsx)(c,{ta:o,account:e},t)})))]})})}const u=()=>{const{initialize_pool:e}=(0,o.e)(),t=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,i.jsxs)("div",{className:"rounded w-full shadow-md px-5 py-5",children:[(0,i.jsx)("div",{children:(0,i.jsx)("p",{className:"text-xl",children:"Create Pool"})}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"deposit",className:"block text-sm font-medium leading-6 text-gray-900",children:"Token address : "}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:(0,i.jsx)("input",{ref:t,type:"text",name:"deposit-amount",id:"deposit-amount",autoComplete:"deposit-amount",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:""})})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"withdraw",className:"block text-sm font-medium leading-6 text-gray-900",children:"Reward token address "}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:(0,i.jsx)("input",{ref:n,type:"text",name:"withdraw-amount",id:"withdraw-amount",autoComplete:"withdraw-amount",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:""})})})]})]}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("button",{type:"button",onClick:a=>(()=>{var a,o;const s=null==t||null==(a=t.current)?void 0:a.value,i=null==n||null==(o=n.current)?void 0:o.value;s&&i&&e.mutateAsync({stakingMintStr:s,rewardAMintStr:i})})(),className:"rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Initialize"})})]})};function c({account:e,ta:t}){const{create_user:n,deposit:s,token_balance:r,user_staked:u,charge_reward:c}=(0,o.e)(),[l,d]=((0,a.useRef)(null),(0,a.useRef)(null),(0,a.useState)("0.00")),[m,g]=(0,a.useState)("0.00"),[p,y]=(0,a.useState)(null),[h,w]=(0,a.useState)(0),[f,k]=(0,a.useState)(9);return(0,a.useEffect)((()=>{e&&(console.log(e),u.mutateAsync({pool:e.publicKey}).then((t=>{g((Number(null==t?void 0:t.balanceStaked)/10**f).toString());const n=e.account.lastUpdateTime.toNumber(),a=Date.now()/1e3-n,o=21e5*(null==t?void 0:t.balanceStaked.toNumber())*a/(31536e3*e.account.totalStaked.toNumber());w(o),y(t)})))}),[e]),(0,a.useEffect)((()=>{t&&r.mutateAsync(t.pubkey).then((e=>{var t;k(e.value.decimals),d(null==(t=e.value.uiAmount)?void 0:t.toString())}))}),[t]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"rounded w-full shadow-md px-5 py-5",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"",children:["Token : ",e.account.stakingMint.toString()]}),(0,i.jsxs)("p",{className:"",children:["Reward : ",e.account.rewardAMint.toString()]})]}),(0,i.jsxs)("div",{className:"grid grid-cols-3 gap-2 mt-3",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("p",{children:["Total staked : ",(Number(e.account.totalStaked)/10**f).toString()]})}),(0,i.jsx)("div",{children:(0,i.jsxs)("p",{children:["Staked users : ",e.account.userStakeCount]})}),(0,i.jsx)("div",{children:(0,i.jsxs)("p",{children:["Remaining rewards : ",e.account.totalReward.toNumber()]})})]}),(0,i.jsxs)("div",{className:"flex items-center justify-around mt-2",children:[(0,i.jsx)("button",{type:"button",onClick:t=>c.mutateAsync({pool:e.publicKey}),className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Charge reward"}),(0,i.jsx)("button",{type:"button",className:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600",children:"Cloase pool"})]})]})})}},5156:(e,t,n)=>{n.d(t,{e:()=>S});var a=n(5196);const o={version:"0.1.0",name:"farming",instructions:[{name:"close",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"farming",isMut:!0,isSigner:!1}],args:[]},{name:"decrement",accounts:[{name:"farming",isMut:!0,isSigner:!1}],args:[]},{name:"increment",accounts:[{name:"farming",isMut:!0,isSigner:!1}],args:[]},{name:"initialize",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"farming",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"set",accounts:[{name:"farming",isMut:!0,isSigner:!1}],args:[{name:"value",type:"u8"}]},{name:"chargeReward",docs:["Charge Reward"],accounts:[{name:"pool",isMut:!0,isSigner:!1},{name:"signer",isMut:!1,isSigner:!0}],args:[{name:"chargeAmount",type:"u64"}]},{name:"remainingReward",docs:["Get Total Reward remaining in Pool"],accounts:[{name:"pool",isMut:!1,isSigner:!1},{name:"signer",isMut:!1,isSigner:!0}],args:[],returns:"u64"},{name:"initializePool",docs:["Initializes a new pool. Able to create pool with single reward by passing the same Mint account for reward_a_mint and reward_a_mint"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"stakingMint",isMut:!1,isSigner:!1,docs:["Staking mint"]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA"]},{name:"rewardAMint",isMut:!1,isSigner:!1,docs:["Reward A mint"]},{name:"rewardAVault",isMut:!0,isSigner:!1,docs:["Reward A vault PDA"]},{name:"authority",isMut:!0,isSigner:!0,docs:["Authority of the pool"]},{name:"base",isMut:!1,isSigner:!0,docs:["Base"]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["System program"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["SPL Token program"]},{name:"rent",isMut:!1,isSigner:!1,docs:["Rent"]}],args:[{name:"rewardDuration",type:"u64"}]},{name:"createUser",docs:["Initialize a user staking account"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"user",isMut:!0,isSigner:!1,docs:["User"]},{name:"owner",isMut:!0,isSigner:!0,docs:["Authority of user account"]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["Misc."]}],args:[]},{name:"pause",docs:["Pause the pool"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the pool"]}],args:[]},{name:"unpause",docs:["Unpauses a previously paused pool. Allowing for funding."],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the pool"]}],args:[]},{name:"deposit",docs:["User deposit tokens in the pool."],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the deposit/withdraw instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA."]},{name:"user",isMut:!0,isSigner:!1,docs:["User."]},{name:"owner",isMut:!1,isSigner:!0,docs:["Authority of user"]},{name:"stakeFromAccount",isMut:!0,isSigner:!1,docs:["User staking ATA"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["Misc."]}],args:[{name:"amount",type:"u64"}]},{name:"withdraw",docs:["User withdraw tokens in the pool."],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the deposit/withdraw instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA."]},{name:"user",isMut:!0,isSigner:!1,docs:["User."]},{name:"owner",isMut:!1,isSigner:!0,docs:["Authority of user"]},{name:"stakeFromAccount",isMut:!0,isSigner:!1,docs:["User staking ATA"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["Misc."]}],args:[{name:"sptAmount",type:"u64"}]},{name:"authorizeFunder",docs:["Authorize additional funders for the pool"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the pool"]}],args:[{name:"funderToAdd",type:"publicKey"}]},{name:"deauthorizeFunder",docs:["Deauthorize funders for the pool"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the pool"]}],args:[{name:"funderToRemove",type:"publicKey"}]},{name:"fund",docs:["Fund the pool with rewards.  This resets the clock on the end date, pushing it out to the set duration. And, linearly redistributes remaining rewards."],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA"]},{name:"rewardAVault",isMut:!0,isSigner:!1,docs:["Reward A Vault PDA"]},{name:"funder",isMut:!1,isSigner:!0,docs:["Reward B Vault PDA","Funder"]},{name:"fromA",isMut:!0,isSigner:!1,docs:["Funder reward A ATA"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["Funder reward B ATA","Misc."]}],args:[{name:"amountA",type:"u64"}]},{name:"claim",docs:["User claim rewards"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA."]},{name:"rewardAVault",isMut:!0,isSigner:!1,docs:["Reward A Vault PDA"]},{name:"user",isMut:!0,isSigner:!1,docs:["Reward B Vault PDA","User."]},{name:"owner",isMut:!1,isSigner:!0,docs:["Authority of user"]},{name:"rewardAAccount",isMut:!0,isSigner:!1,docs:["User's Reward A ATA"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["User's Reward B ATA"]}],args:[]},{name:"withdrawExtraToken",docs:["Withdraw token that mistakenly deposited to staking_vault"],accounts:[{name:"pool",isMut:!1,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA"]},{name:"withdrawToAccount",isMut:!0,isSigner:!1,docs:["Token account to receive mistakenly deposited token"]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the staking instance"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["Misc."]}],args:[]},{name:"closeUser",docs:["Closes a users stake account. Validation is done to ensure this is only allowed when the user has nothing staked and no rewards pending."],accounts:[{name:"pool",isMut:!0,isSigner:!1},{name:"user",isMut:!0,isSigner:!1},{name:"owner",isMut:!0,isSigner:!0}],args:[]},{name:"migrateFarmingRate",docs:["anyone can call this"],accounts:[{name:"pool",isMut:!0,isSigner:!1}],args:[]},{name:"closePool",docs:["Closes a pool account. Only able to be done when there are no users staked."],accounts:[{name:"refundee",isMut:!0,isSigner:!1},{name:"stakingRefundee",isMut:!0,isSigner:!1},{name:"rewardARefundee",isMut:!0,isSigner:!1},{name:"pool",isMut:!0,isSigner:!1},{name:"authority",isMut:!1,isSigner:!0},{name:"stakingVault",isMut:!0,isSigner:!1},{name:"rewardAVault",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1}],args:[]}],accounts:[{name:"farming",type:{kind:"struct",fields:[{name:"count",type:"u8"}]}},{name:"pool",docs:["Pool account wrapper"],type:{kind:"struct",fields:[{name:"authority",docs:["Privileged account."],type:"publicKey"},{name:"paused",docs:["Paused state of the program"],type:"bool"},{name:"stakingMint",docs:["Mint of the token that can be staked."],type:"publicKey"},{name:"stakingVault",docs:["Vault to store staked tokens."],type:"publicKey"},{name:"rewardAMint",docs:["Mint of the reward A token."],type:"publicKey"},{name:"rewardAVault",docs:["Vault to store reward A tokens."],type:"publicKey"},{name:"baseKey",docs:["Mint of the reward B token.","Vault to store reward B tokens.","Base key"],type:"publicKey"},{name:"rewardDuration",docs:["The period which rewards are linearly distributed."],type:"u64"},{name:"rewardDurationEnd",docs:["The timestamp at which the current reward period ends."],type:"u64"},{name:"lastUpdateTime",docs:["The last time reward states were updated."],type:"u64"},{name:"rewardARate",docs:["deprecated field"],type:"u64"},{name:"rewardAPerTokenStored",docs:["deprecated field","Last calculated reward A per pool token."],type:"u128"},{name:"userStakeCount",docs:["Last calculated reward B per pool token.","Users staked"],type:"u32"},{name:"funders",docs:["authorized funders","[] because short size, fixed account size, and ease of use on","client due to auto generated account size property"],type:{array:["publicKey",3]}},{name:"rewardARateU128",docs:["reward_a_rate in u128 form"],type:"u128"},{name:"poolBump",docs:["reward_b_rate in u128 form","Pool bump"],type:"u8"},{name:"totalStaked",docs:["Total staked amount"],type:"u64"},{name:"totalReward",type:"u64"}]}},{name:"user",docs:["Farming user account"],type:{kind:"struct",fields:[{name:"pool",docs:["Pool the this user belongs to."],type:"publicKey"},{name:"owner",docs:["The owner of this account."],type:"publicKey"},{name:"rewardAPerTokenComplete",docs:["The amount of token A claimed."],type:"u128"},{name:"rewardAPerTokenPending",docs:["The amount of token B claimed.","The amount of token A pending claim."],type:"u64"},{name:"balanceStaked",docs:["The amount of token B pending claim.","The amount staked."],type:"u64"},{name:"nonce",docs:["Signer nonce."],type:"u8"}]}}],events:[{name:"EventDeposit",fields:[{name:"amount",type:"u64",index:!1}]},{name:"EventWithdraw",fields:[{name:"amount",type:"u64",index:!1}]},{name:"EventFund",fields:[{name:"amountA",type:"u64",index:!1}]},{name:"EventClaim",fields:[{name:"amountA",type:"u64",index:!1}]},{name:"EventAuthorizeFunder",fields:[{name:"newFunder",type:"publicKey",index:!1}]},{name:"EventUnauthorizeFunder",fields:[{name:"funder",type:"publicKey",index:!1}]}],errors:[{code:6e3,name:"InsufficientFundWithdraw",msg:"Insufficient funds to withdraw."},{code:6001,name:"AmountMustBeGreaterThanZero",msg:"Amount must be greater than zero."},{code:6002,name:"SingleDepositTokenBCannotBeFunded",msg:"Reward B cannot be funded - pool is single deposit."},{code:6003,name:"PoolPaused",msg:"Pool is paused."},{code:6004,name:"DurationTooShort",msg:"Duration cannot be shorter than one day."},{code:6005,name:"FunderAlreadyAuthorized",msg:"Provided funder is already authorized to fund."},{code:6006,name:"MaxFunders",msg:"Maximum funders already authorized."},{code:6007,name:"CannotDeauthorizePoolAuthority",msg:"Cannot deauthorize the primary pool authority."},{code:6008,name:"CannotDeauthorizeMissingAuthority",msg:"Authority not found for deauthorization."},{code:6009,name:"MathOverflow",msg:"Math operation overflow"}]},s=new a.PublicKey("f9UbdcKhVdNLnD9K2g7ozUYUbjxHkupFJ3HBXkEcwMU");var i=n(1638),r=n(3530),u=n(7073),c=n(514),l=n(3696),d=n(6824),m=n(6231),g=n(9682),p=n(8599);const y=new i.BN(10);async function h(e,t,n,a,o){return i.SX.PublicKey.findProgramAddressSync([o?o.toBuffer(null,8):y.toBuffer(null,8),t.toBuffer(),n.toBuffer(),a.toBuffer()],e.programId)}async function w(e,t,n){return i.SX.PublicKey.findProgramAddressSync([n.toBuffer(),t.toBuffer()],e.programId)}var f=n(5604),k=n(7876);function S(){const e=new i.BN(100),{connection:t}=(0,r.w)(),{cluster:n}=(0,m.Gx)(),y=(0,p.hx)(),S=(0,g.is)(),b=(0,l.useMemo)((()=>(n.network,s)),[n]),A=new i.BP(o,b,S),M=(0,u.I)({queryKey:["farming","all",{cluster:n}],queryFn:()=>A.account.farming.all()}),x=(0,u.I)({queryKey:["get-program-account",{cluster:n}],queryFn:()=>t.getParsedAccountInfo(b)}),v=(0,u.I)({queryKey:["Farming","get-pools",{cluster:n}],queryFn:()=>A.account.pool.all()}),P=(0,u.I)({queryKey:["Farming","deployer",{cluster:n}],queryFn:()=>{if("E9Kg7GyZMY72hW1NewkYY78MBNkFaFbz4jFyC5uC3Dsv"==S.wallet.publicKey.toString())return!0}}),K=(0,c.n)({mutationKey:["farming","initialize",{cluster:n}],mutationFn:e=>A.methods.initialize().accounts({farming:e.publicKey}).signers([e]).rpc(),onSuccess:e=>(y(e),M.refetch()),onError:()=>d.Ay.error("Failed to initialize account")}),F=(0,c.n)({mutationKey:["farming","initialize-pool",{cluster:n}],mutationFn:async({stakingMintStr:t,rewardAMintStr:n})=>{const o=new a.PublicKey(t),s=new a.PublicKey(n),[r,u]=await h(A,o,s,S.wallet.publicKey,e),[c,l]=await async function(e,t,n,a,o){const[s,r]=await h(e,t,n,a,o);return i.SX.PublicKey.findProgramAddressSync([Buffer.from("staking"),s.toBuffer()],e.programId)}(A,o,s,S.wallet.publicKey,e),[d,m]=await async function(e,t,n,a,o){const[s,r]=await h(e,t,n,a,o);return i.SX.PublicKey.findProgramAddressSync([Buffer.from("reward_a"),s.toBuffer()],e.programId)}(A,o,s,S.wallet.publicKey,e);return A.methods.initializePool(e).accounts({authority:S.wallet.publicKey,base:S.wallet.publicKey,pool:r,rent:i.SX.SYSVAR_RENT_PUBKEY,rewardAMint:s,rewardAVault:d,stakingMint:o,stakingVault:c,systemProgram:i.SX.SystemProgram.programId,tokenProgram:f.x5}).rpc().then((e=>e)).catch((e=>{y("Already existing pool!")}))},onSuccess:e=>(y("Success"),v.refetch()),onError:()=>{y("Error")}}),T=(0,c.n)({mutationKey:["Farming","all-pools",{cluster:n}],mutationFn:async()=>A.account.pool.all(),onSuccess:e=>{},onError:()=>{}}),B=(0,c.n)({mutationKey:["Farming","create-user",{cluster:n}],mutationFn:async({stakingMintStr:t,rewardAMintStr:n})=>{const o=new a.PublicKey(t),s=new a.PublicKey(n),[i,r]=await h(A,o,s,S.wallet.publicKey,e),[u,c]=await w(A,i,S.wallet.publicKey)},onSuccess:e=>{},onError:()=>{}}),j=(0,c.n)({mutationKey:["Farming","deposit",{cluster:n}],mutationFn:async({pool:e,amount:t,userTAstr:n})=>{const o=new i.BN(t),s=new a.PublicKey(n),r=e,[u,c]=await w(A,r,S.wallet.publicKey),l=await A.account.pool.fetch(r);return A.account.user.fetch(u).then((async e=>{console.log(e);return await A.methods.deposit(o).accounts({owner:S.wallet.publicKey,pool:r,stakeFromAccount:s,stakingVault:l.stakingVault,tokenProgram:f.x5,user:u}).rpc()})).catch((async e=>{console.log(e),await A.methods.createUser().accounts({owner:S.wallet.publicKey,pool:r,systemProgram:i.SX.SystemProgram.programId,user:u}).rpc(),await setTimeout((()=>{}),2e3);return await A.methods.deposit(o).accounts({owner:S.wallet.publicKey,pool:r,stakeFromAccount:s,stakingVault:l.stakingVault,tokenProgram:f.x5,user:u}).rpc()}))},onSuccess:e=>(y("Success"),e),onError:()=>{}}),N=(0,c.n)({mutationKey:["Farming","withdraw",{cluster:n}],mutationFn:async({pool:e,amount:t,userTAstr:n})=>{const o=new i.BN(t),s=new a.PublicKey(n),r=e,[u,c]=await w(A,r,S.wallet.publicKey),l=await A.account.pool.fetch(r);await A.account.user.fetch(u).then((async e=>await A.methods.withdraw(o).accounts({owner:S.wallet.publicKey,pool:r,stakeFromAccount:s,stakingVault:l.stakingVault,tokenProgram:f.x5,user:u}).rpc())).catch((async e=>{await A.methods.createUser().accounts({owner:S.wallet.publicKey,pool:r,systemProgram:i.SX.SystemProgram.programId,user:u}).rpc()}))},onSuccess:e=>(y("Success"),e),onError:()=>{}}),V=(0,c.n)({mutationKey:["Farming","claim",{cluster:n}],mutationFn:async({pool:e})=>{const t=e,n=await A.account.pool.fetch(t),[a,o]=await w(A,t,S.wallet.publicKey),s=(0,k.Xt)(n.rewardAMint,S.wallet.publicKey,!0,f.x5,f.EK);S.connection.getTokenAccountBalance(s).then((e=>{console.log(e)})).catch((e=>{}));return await A.methods.claim().accounts({owner:S.wallet.publicKey,pool:t,rewardAAccount:s,rewardAVault:n.rewardAVault,stakingVault:n.stakingVault,tokenProgram:f.x5,user:a}).rpc()},onSuccess:e=>{y(e)}}),z=(0,u.I)({queryKey:["Farming","user-token-accounts",{cluster:n}],queryFn:async()=>await S.connection.getParsedTokenAccountsByOwner(S.wallet.publicKey,{programId:f.x5})}),R=(0,c.n)({mutationKey:["Farming","user-token-balance",{cluster:n}],mutationFn:async e=>await S.connection.getTokenAccountBalance(e),onSuccess:async e=>e}),_=(0,c.n)({mutationKey:["Farming","user-charge-token",{cluster:n}],mutationFn:async({pool:e})=>{const t=new i.BN(21e5);return A.methods.chargeReward(t).accounts({signer:S.wallet.publicKey,pool:e}).rpc()},onSuccess:e=>(y(e),e),onError:()=>{}}),U=((0,c.n)({mutationKey:["Farming","user-pda",{cluster:n}],mutationFn:async({pool:e})=>{const t=new a.PublicKey(e),[n,o]=await w(A,t,S.wallet.publicKey);return n},onSuccess:()=>{},onError:()=>{}}),(0,c.n)({mutationKey:["Farming","user-staked",{cluster:n}],mutationFn:async({pool:e})=>{const t=e,[n,a]=await w(A,t,S.wallet.publicKey);return A.account.user.fetch(n).then((e=>e)).catch((e=>{}))},onSuccess:e=>e}));return{program:A,programId:b,accounts:M,getProgramAccount:x,initialize:K,initialize_pool:F,get_pools:T,allPools:v,create_user:B,deposit:j,withdraw:N,user_token_accounts:z,token_balance:R,user_staked:U,claim:V,deployer:P,charge_reward:_}}}}]);