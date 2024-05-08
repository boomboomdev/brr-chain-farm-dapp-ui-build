"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[167],{7167:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var a=n(8267),s=n(9682),o=n(8599),i=n(5196);const r={version:"0.1.0",name:"farming",instructions:[{name:"close",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"farming",isMut:!0,isSigner:!1}],args:[]},{name:"decrement",accounts:[{name:"farming",isMut:!0,isSigner:!1}],args:[]},{name:"increment",accounts:[{name:"farming",isMut:!0,isSigner:!1}],args:[]},{name:"initialize",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"farming",isMut:!0,isSigner:!0},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[]},{name:"set",accounts:[{name:"farming",isMut:!0,isSigner:!1}],args:[{name:"value",type:"u8"}]},{name:"chargeReward",docs:["Charge Reward"],accounts:[{name:"pool",isMut:!0,isSigner:!1},{name:"signer",isMut:!1,isSigner:!0}],args:[{name:"chargeAmount",type:"u64"}]},{name:"remainingReward",docs:["Get Total Reward remaining in Pool"],accounts:[{name:"pool",isMut:!1,isSigner:!1},{name:"signer",isMut:!1,isSigner:!0}],args:[],returns:"u64"},{name:"initializePool",docs:["Initializes a new pool. Able to create pool with single reward by passing the same Mint account for reward_a_mint and reward_a_mint"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"stakingMint",isMut:!1,isSigner:!1,docs:["Staking mint"]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA"]},{name:"rewardAMint",isMut:!1,isSigner:!1,docs:["Reward A mint"]},{name:"rewardAVault",isMut:!0,isSigner:!1,docs:["Reward A vault PDA"]},{name:"authority",isMut:!0,isSigner:!0,docs:["Authority of the pool"]},{name:"base",isMut:!1,isSigner:!0,docs:["Base"]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["System program"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["SPL Token program"]},{name:"rent",isMut:!1,isSigner:!1,docs:["Rent"]}],args:[{name:"rewardDuration",type:"u64"}]},{name:"createUser",docs:["Initialize a user staking account"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"user",isMut:!0,isSigner:!1,docs:["User"]},{name:"owner",isMut:!0,isSigner:!0,docs:["Authority of user account"]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["Misc."]}],args:[]},{name:"pause",docs:["Pause the pool"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the pool"]}],args:[]},{name:"unpause",docs:["Unpauses a previously paused pool. Allowing for funding."],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the pool"]}],args:[]},{name:"deposit",docs:["User deposit tokens in the pool."],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the deposit/withdraw instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA."]},{name:"user",isMut:!0,isSigner:!1,docs:["User."]},{name:"owner",isMut:!1,isSigner:!0,docs:["Authority of user"]},{name:"stakeFromAccount",isMut:!0,isSigner:!1,docs:["User staking ATA"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["Misc."]}],args:[{name:"amount",type:"u64"}]},{name:"withdraw",docs:["User withdraw tokens in the pool."],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the deposit/withdraw instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA."]},{name:"user",isMut:!0,isSigner:!1,docs:["User."]},{name:"owner",isMut:!1,isSigner:!0,docs:["Authority of user"]},{name:"stakeFromAccount",isMut:!0,isSigner:!1,docs:["User staking ATA"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["Misc."]}],args:[{name:"sptAmount",type:"u64"}]},{name:"authorizeFunder",docs:["Authorize additional funders for the pool"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the pool"]}],args:[{name:"funderToAdd",type:"publicKey"}]},{name:"deauthorizeFunder",docs:["Deauthorize funders for the pool"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the pool"]}],args:[{name:"funderToRemove",type:"publicKey"}]},{name:"fund",docs:["Fund the pool with rewards.  This resets the clock on the end date, pushing it out to the set duration. And, linearly redistributes remaining rewards."],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA"]},{name:"rewardAVault",isMut:!0,isSigner:!1,docs:["Reward A Vault PDA"]},{name:"funder",isMut:!1,isSigner:!0,docs:["Reward B Vault PDA","Funder"]},{name:"fromA",isMut:!0,isSigner:!1,docs:["Funder reward A ATA"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["Funder reward B ATA","Misc."]}],args:[{name:"amountA",type:"u64"}]},{name:"claim",docs:["User claim rewards"],accounts:[{name:"pool",isMut:!0,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA."]},{name:"rewardAVault",isMut:!0,isSigner:!1,docs:["Reward A Vault PDA"]},{name:"user",isMut:!0,isSigner:!1,docs:["Reward B Vault PDA","User."]},{name:"owner",isMut:!1,isSigner:!0,docs:["Authority of user"]},{name:"rewardAAccount",isMut:!0,isSigner:!1,docs:["User's Reward A ATA"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["User's Reward B ATA"]}],args:[]},{name:"withdrawExtraToken",docs:["Withdraw token that mistakenly deposited to staking_vault"],accounts:[{name:"pool",isMut:!1,isSigner:!1,docs:["Global accounts for the staking instance."]},{name:"stakingVault",isMut:!0,isSigner:!1,docs:["Staking vault PDA"]},{name:"withdrawToAccount",isMut:!0,isSigner:!1,docs:["Token account to receive mistakenly deposited token"]},{name:"authority",isMut:!1,isSigner:!0,docs:["Authority of the staking instance"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["Misc."]}],args:[]},{name:"closeUser",docs:["Closes a users stake account. Validation is done to ensure this is only allowed when the user has nothing staked and no rewards pending."],accounts:[{name:"pool",isMut:!0,isSigner:!1},{name:"user",isMut:!0,isSigner:!1},{name:"owner",isMut:!0,isSigner:!0}],args:[]},{name:"migrateFarmingRate",docs:["anyone can call this"],accounts:[{name:"pool",isMut:!0,isSigner:!1}],args:[]},{name:"closePool",docs:["Closes a pool account. Only able to be done when there are no users staked."],accounts:[{name:"refundee",isMut:!0,isSigner:!1},{name:"stakingRefundee",isMut:!0,isSigner:!1},{name:"rewardARefundee",isMut:!0,isSigner:!1},{name:"pool",isMut:!0,isSigner:!1},{name:"authority",isMut:!1,isSigner:!0},{name:"stakingVault",isMut:!0,isSigner:!1},{name:"rewardAVault",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1}],args:[]}],accounts:[{name:"farming",type:{kind:"struct",fields:[{name:"count",type:"u8"}]}},{name:"pool",docs:["Pool account wrapper"],type:{kind:"struct",fields:[{name:"authority",docs:["Privileged account."],type:"publicKey"},{name:"paused",docs:["Paused state of the program"],type:"bool"},{name:"stakingMint",docs:["Mint of the token that can be staked."],type:"publicKey"},{name:"stakingVault",docs:["Vault to store staked tokens."],type:"publicKey"},{name:"rewardAMint",docs:["Mint of the reward A token."],type:"publicKey"},{name:"rewardAVault",docs:["Vault to store reward A tokens."],type:"publicKey"},{name:"baseKey",docs:["Mint of the reward B token.","Vault to store reward B tokens.","Base key"],type:"publicKey"},{name:"rewardDuration",docs:["The period which rewards are linearly distributed."],type:"u64"},{name:"rewardDurationEnd",docs:["The timestamp at which the current reward period ends."],type:"u64"},{name:"lastUpdateTime",docs:["The last time reward states were updated."],type:"u64"},{name:"rewardARate",docs:["deprecated field"],type:"u64"},{name:"rewardAPerTokenStored",docs:["deprecated field","Last calculated reward A per pool token."],type:"u128"},{name:"userStakeCount",docs:["Last calculated reward B per pool token.","Users staked"],type:"u32"},{name:"funders",docs:["authorized funders","[] because short size, fixed account size, and ease of use on","client due to auto generated account size property"],type:{array:["publicKey",3]}},{name:"rewardARateU128",docs:["reward_a_rate in u128 form"],type:"u128"},{name:"poolBump",docs:["reward_b_rate in u128 form","Pool bump"],type:"u8"},{name:"totalStaked",docs:["Total staked amount"],type:"u64"},{name:"totalReward",type:"u64"}]}},{name:"user",docs:["Farming user account"],type:{kind:"struct",fields:[{name:"pool",docs:["Pool the this user belongs to."],type:"publicKey"},{name:"owner",docs:["The owner of this account."],type:"publicKey"},{name:"rewardAPerTokenComplete",docs:["The amount of token A claimed."],type:"u128"},{name:"rewardAPerTokenPending",docs:["The amount of token B claimed.","The amount of token A pending claim."],type:"u64"},{name:"balanceStaked",docs:["The amount of token B pending claim.","The amount staked."],type:"u64"},{name:"nonce",docs:["Signer nonce."],type:"u8"}]}}],events:[{name:"EventDeposit",fields:[{name:"amount",type:"u64",index:!1}]},{name:"EventWithdraw",fields:[{name:"amount",type:"u64",index:!1}]},{name:"EventFund",fields:[{name:"amountA",type:"u64",index:!1}]},{name:"EventClaim",fields:[{name:"amountA",type:"u64",index:!1}]},{name:"EventAuthorizeFunder",fields:[{name:"newFunder",type:"publicKey",index:!1}]},{name:"EventUnauthorizeFunder",fields:[{name:"funder",type:"publicKey",index:!1}]}],errors:[{code:6e3,name:"InsufficientFundWithdraw",msg:"Insufficient funds to withdraw."},{code:6001,name:"AmountMustBeGreaterThanZero",msg:"Amount must be greater than zero."},{code:6002,name:"SingleDepositTokenBCannotBeFunded",msg:"Reward B cannot be funded - pool is single deposit."},{code:6003,name:"PoolPaused",msg:"Pool is paused."},{code:6004,name:"DurationTooShort",msg:"Duration cannot be shorter than one day."},{code:6005,name:"FunderAlreadyAuthorized",msg:"Provided funder is already authorized to fund."},{code:6006,name:"MaxFunders",msg:"Maximum funders already authorized."},{code:6007,name:"CannotDeauthorizePoolAuthority",msg:"Cannot deauthorize the primary pool authority."},{code:6008,name:"CannotDeauthorizeMissingAuthority",msg:"Authority not found for deauthorization."},{code:6009,name:"MathOverflow",msg:"Math operation overflow"}]},u=new i.PublicKey("f9UbdcKhVdNLnD9K2g7ozUYUbjxHkupFJ3HBXkEcwMU");var c=n(1638),l=n(3530),d=n(7073),m=n(514),g=n(3696),p=n(6824),h=n(6231);const y=new c.BN(10);async function w(e,t,n,a,s){return c.SX.PublicKey.findProgramAddressSync([s?s.toBuffer(null,8):y.toBuffer(null,8),t.toBuffer(),n.toBuffer(),a.toBuffer()],e.programId)}async function f(e,t,n){return c.SX.PublicKey.findProgramAddressSync([n.toBuffer(),t.toBuffer()],e.programId)}var b=n(5604),k=n(7876);function x(){const e=new c.BN(100),{connection:t}=(0,l.w)(),{cluster:n}=(0,h.Gx)(),a=(0,o.hx)(),y=(0,s.is)(),x=(0,g.useMemo)((()=>(n.network,u)),[n]),S=new c.BP(r,x,y),A=(0,d.I)({queryKey:["farming","all",{cluster:n}],queryFn:()=>S.account.farming.all()}),v=(0,d.I)({queryKey:["get-program-account",{cluster:n}],queryFn:()=>t.getParsedAccountInfo(x)}),M=(0,d.I)({queryKey:["Farming","get-pools",{cluster:n}],queryFn:()=>S.account.pool.all()}),P=(0,d.I)({queryKey:["Farming","deployer",{cluster:n}],queryFn:()=>{if("EFevPkhBtapw59vZEq3CfgbnBrPqkyPVqUSx6j59HAnd"==y.wallet.publicKey.toString())return!0}}),K=(0,m.n)({mutationKey:["farming","initialize",{cluster:n}],mutationFn:e=>S.methods.initialize().accounts({farming:e.publicKey}).signers([e]).rpc(),onSuccess:e=>(a(e),A.refetch()),onError:()=>p.Ay.error("Failed to initialize account")}),j=(0,m.n)({mutationKey:["farming","initialize-pool",{cluster:n}],mutationFn:async({stakingMintStr:t,rewardAMintStr:n})=>{const s=new i.PublicKey(t),o=new i.PublicKey(n),[r,u]=await w(S,s,o,y.wallet.publicKey,e),[l,d]=await async function(e,t,n,a,s){const[o,i]=await w(e,t,n,a,s);return c.SX.PublicKey.findProgramAddressSync([Buffer.from("staking"),o.toBuffer()],e.programId)}(S,s,o,y.wallet.publicKey,e),[m,g]=await async function(e,t,n,a,s){const[o,i]=await w(e,t,n,a,s);return c.SX.PublicKey.findProgramAddressSync([Buffer.from("reward_a"),o.toBuffer()],e.programId)}(S,s,o,y.wallet.publicKey,e);return S.methods.initializePool(e).accounts({authority:y.wallet.publicKey,base:y.wallet.publicKey,pool:r,rent:c.SX.SYSVAR_RENT_PUBKEY,rewardAMint:o,rewardAVault:m,stakingMint:s,stakingVault:l,systemProgram:c.SX.SystemProgram.programId,tokenProgram:b.x5}).rpc().then((e=>e)).catch((e=>{a("Already existing pool!")}))},onSuccess:e=>(a("Success"),M.refetch()),onError:()=>{a("Error")}}),F=(0,m.n)({mutationKey:["Farming","all-pools",{cluster:n}],mutationFn:async()=>S.account.pool.all(),onSuccess:e=>{},onError:()=>{}}),N=(0,m.n)({mutationKey:["Farming","create-user",{cluster:n}],mutationFn:async({stakingMintStr:t,rewardAMintStr:n})=>{const a=new i.PublicKey(t),s=new i.PublicKey(n),[o,r]=await w(S,a,s,y.wallet.publicKey,e),[u,c]=await f(S,o,y.wallet.publicKey)},onSuccess:e=>{},onError:()=>{}}),T=(0,m.n)({mutationKey:["Farming","deposit",{cluster:n}],mutationFn:async({pool:e,amount:t,userTAstr:n})=>{const a=new c.BN(t),s=new i.PublicKey(n),o=e,[r,u]=await f(S,o,y.wallet.publicKey),l=await S.account.pool.fetch(o);return S.account.user.fetch(r).then((async e=>{console.log(e);return await S.methods.deposit(a).accounts({owner:y.wallet.publicKey,pool:o,stakeFromAccount:s,stakingVault:l.stakingVault,tokenProgram:b.x5,user:r}).rpc()})).catch((async e=>{console.log(e),await S.methods.createUser().accounts({owner:y.wallet.publicKey,pool:o,systemProgram:c.SX.SystemProgram.programId,user:r}).rpc(),await setTimeout((()=>{}),2e3);return await S.methods.deposit(a).accounts({owner:y.wallet.publicKey,pool:o,stakeFromAccount:s,stakingVault:l.stakingVault,tokenProgram:b.x5,user:r}).rpc()}))},onSuccess:e=>(a("Success"),e),onError:()=>{}}),B=(0,m.n)({mutationKey:["Farming","withdraw",{cluster:n}],mutationFn:async({pool:e,amount:t,userTAstr:n})=>{const a=new c.BN(t),s=new i.PublicKey(n),o=e,[r,u]=await f(S,o,y.wallet.publicKey),l=await S.account.pool.fetch(o);await S.account.user.fetch(r).then((async e=>await S.methods.withdraw(a).accounts({owner:y.wallet.publicKey,pool:o,stakeFromAccount:s,stakingVault:l.stakingVault,tokenProgram:b.x5,user:r}).rpc())).catch((async e=>{await S.methods.createUser().accounts({owner:y.wallet.publicKey,pool:o,systemProgram:c.SX.SystemProgram.programId,user:r}).rpc()}))},onSuccess:e=>(a("Success"),e),onError:()=>{}}),V=(0,m.n)({mutationKey:["Farming","claim",{cluster:n}],mutationFn:async({pool:e})=>{const t=e,n=await S.account.pool.fetch(t),[a,s]=await f(S,t,y.wallet.publicKey),o=(0,k.Xt)(n.rewardAMint,y.wallet.publicKey,!0,b.x5,b.EK);y.connection.getTokenAccountBalance(o).then((e=>{console.log(e)})).catch((e=>{}));return await S.methods.claim().accounts({owner:y.wallet.publicKey,pool:t,rewardAAccount:o,rewardAVault:n.rewardAVault,stakingVault:n.stakingVault,tokenProgram:b.x5,user:a}).rpc()},onSuccess:e=>{a(e)}}),z=(0,d.I)({queryKey:["Farming","user-token-accounts",{cluster:n}],queryFn:async()=>await y.connection.getParsedTokenAccountsByOwner(y.wallet.publicKey,{programId:b.x5})}),R=(0,m.n)({mutationKey:["Farming","user-token-balance",{cluster:n}],mutationFn:async e=>await y.connection.getTokenAccountBalance(e),onSuccess:async e=>e}),_=((0,m.n)({mutationKey:["Farming","user-pda",{cluster:n}],mutationFn:async({pool:e})=>{const t=new i.PublicKey(e),[n,a]=await f(S,t,y.wallet.publicKey);return n},onSuccess:()=>{},onError:()=>{}}),(0,m.n)({mutationKey:["Farming","user-staked",{cluster:n}],mutationFn:async({pool:e})=>{const t=e,[n,a]=await f(S,t,y.wallet.publicKey);return S.account.user.fetch(n).then((e=>e)).catch((e=>{}))},onSuccess:e=>e}));return{program:S,programId:x,accounts:A,getProgramAccount:v,initialize:K,initialize_pool:j,get_pools:F,allPools:M,create_user:N,deposit:T,withdraw:B,user_token_accounts:z,token_balance:R,user_staked:_,claim:V,deployer:P}}n(6362);var S=n(2540);function A(){const[e,t]=(0,g.useState)([]),{initialize:n,initialize_pool:a,get_pools:s,allPools:o,user_token_accounts:i,deployer:r}=x();return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)("div",{className:"flex justify-around"})})}function v(){var e,t;const{accounts:n,getProgramAccount:a,allPools:s,user_token_accounts:o,deployer:i}=x();return a.isLoading?(0,S.jsx)("span",{className:"loading loading-spinner loading-lg"}):null!=(e=a.data)&&e.value?(0,S.jsxs)("div",{className:"space-y-6",children:[s.isLoading?(0,S.jsx)(S.Fragment,{}):(0,S.jsx)(S.Fragment,{children:o.isLoading?(0,S.jsx)(S.Fragment,{}):(0,S.jsx)(S.Fragment,{children:null==(t=s.data)?void 0:t.map(((e,t)=>{var n;const a=null==(n=o.data)?void 0:n.value.find((t=>{var n;return(null==(n=t.account.data)||null==(n=n.parsed)||null==(n=n.info)?void 0:n.mint)==e.account.stakingMint.toString()}));return(0,S.jsx)(M,{account:e,ta:a},t)}))})}),!i.isLoading&&i.data&&(0,S.jsx)(P,{})]}):(0,S.jsx)("div",{className:"alert alert-info flex justify-center",children:(0,S.jsx)("span",{children:"Program account not found. Make sure you have deployed the program and are on the correct cluster."})})}function M({account:e,ta:t}){const{create_user:n,deposit:a,token_balance:s,user_staked:o,withdraw:i,claim:r}=x(),u=(0,g.useRef)(null),c=(0,g.useRef)(null),[l,d]=(0,g.useState)("0.00"),[m,p]=(0,g.useState)("0.00"),[h,y]=(0,g.useState)(null),[w,f]=(0,g.useState)(0),[b,k]=(0,g.useState)(9);(0,g.useEffect)((()=>{t&&s.mutateAsync(t.pubkey).then((e=>{var t;k(e.value.decimals),d(null==(t=e.value.uiAmount)?void 0:t.toString())}))}),[t]),(0,g.useEffect)((()=>{e&&o.mutateAsync({pool:e.publicKey}).then((t=>{p(((null==t?void 0:t.balanceStaked)/10**b).toString());const n=e.account.lastUpdateTime.toNumber(),a=Date.now()/1e3-n,s=21e5*(null==t?void 0:t.balanceStaked.toNumber())*a/(31536e3*e.account.totalStaked.toNumber());f(s),y(t)}))}),[e]);return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{className:"rounded w-full shadow-md px-5 py-5",children:[(0,S.jsxs)("div",{children:[(0,S.jsxs)("p",{className:"text-xl",children:["Token : ",e.account.stakingMint.toString()]}),(0,S.jsxs)("p",{className:"text-xl",children:["Reward : ",e.account.rewardAMint.toString()]})]}),!t&&(0,S.jsx)(S.Fragment,{children:(0,S.jsx)("p",{className:"text-4xl mt-1 mb-1",children:"You have not token"})}),(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"mt-2",children:(0,S.jsxs)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:[(0,S.jsx)("span",{className:"flex select-none items-center pl-3 text-gray-500 sm:text-sm",children:"Amount"}),(0,S.jsx)("input",{type:"number",ref:u,name:"deposit-amount",id:"deposit-amount",autoComplete:"deposit-amount",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:""})]})}),(0,S.jsxs)("label",{htmlFor:"deposit",className:"block text-sm font-medium leading-6 text-gray-900",children:["Your Balance : ",l]}),(0,S.jsx)("button",{type:"button",onClick:n=>{return r=Number(null==u||null==(i=u.current)?void 0:i.value)*10**b,e.account.stakingMint,e.account.rewardAMint,void(r&&a.mutateAsync({userTAstr:t.pubkey.toString(),pool:e.publicKey,amount:Number(r)}).then((()=>{s.mutateAsync(t.pubkey).then((e=>{var t;d(null==(t=e.value.uiAmount)?void 0:t.toString())})),o.mutateAsync({pool:e.publicKey}).then((e=>{p(((null==e?void 0:e.balanceStaked)/10**b).toString()),y(e)}))})));var i,r},className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Deposit"})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"mt-2",children:(0,S.jsxs)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:[(0,S.jsx)("span",{className:"flex select-none items-center pl-3 text-gray-500 sm:text-sm",children:"Amount"}),(0,S.jsx)("input",{type:"number",ref:c,name:"withdraw-amount",id:"withdraw-amount",autoComplete:"withdraw-amount",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:""})]})}),(0,S.jsxs)("label",{htmlFor:"withdraw",className:"block text-sm font-medium leading-6 text-gray-900",children:["Your Staked : ",m]}),(0,S.jsx)("button",{type:"button",onClick:n=>{var a,r;(r=Number(null==c||null==(a=c.current)?void 0:a.value)*10**b)&&i.mutateAsync({userTAstr:t.pubkey.toString(),pool:e.publicKey,amount:Number(r)}).then((()=>{s.mutateAsync(t.pubkey).then((e=>{var t;d(null==(t=e.value.uiAmount)?void 0:t.toString())})),o.mutateAsync({pool:e.publicKey}).then((e=>{p(((null==e?void 0:e.balanceStaked)/10**b).toString()),y(e)}))}))},disabled:"0.00"==m,className:"rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Withdraw"})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:"mt-2"}),(0,S.jsxs)("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:["Your Reward : ",w>0?w:"0.00"]}),(0,S.jsx)("button",{type:"button",onClick:t=>{r.mutateAsync({pool:e.publicKey})},className:"rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Claim"})]})]})})]})})}const P=()=>{const{initialize_pool:e}=x(),t=(0,g.useRef)(null),n=(0,g.useRef)(null);return(0,S.jsxs)("div",{className:"rounded w-full shadow-md px-5 py-5",children:[(0,S.jsx)("div",{children:(0,S.jsx)("p",{className:"text-xl",children:"Create Pool"})}),(0,S.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:"deposit",className:"block text-sm font-medium leading-6 text-gray-900",children:"Token address : "}),(0,S.jsx)("div",{className:"mt-2",children:(0,S.jsx)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:(0,S.jsx)("input",{ref:t,type:"text",name:"deposit-amount",id:"deposit-amount",autoComplete:"deposit-amount",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:""})})})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)("label",{htmlFor:"withdraw",className:"block text-sm font-medium leading-6 text-gray-900",children:"Reward token address "}),(0,S.jsx)("div",{className:"mt-2",children:(0,S.jsx)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:(0,S.jsx)("input",{ref:n,type:"text",name:"withdraw-amount",id:"withdraw-amount",autoComplete:"withdraw-amount",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:""})})})]})]}),(0,S.jsx)("div",{className:"mt-2",children:(0,S.jsx)("button",{type:"button",onClick:a=>(()=>{var a,s;const o=null==t||null==(a=t.current)?void 0:a.value,i=null==n||null==(s=n.current)?void 0:s.value;o&&i&&e.mutateAsync({stakingMintStr:o,rewardAMintStr:i})})(),className:"rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Initialize"})})]})};function K(){const{publicKey:e}=(0,a.v)(),{programId:t}=x();return e?(0,S.jsxs)("div",{children:[(0,S.jsx)(o.sR,{title:"Farming",subtitle:"",children:(0,S.jsx)(A,{})}),(0,S.jsx)(v,{})]}):(0,S.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,S.jsx)("div",{className:"hero py-[64px]",children:(0,S.jsx)("div",{className:"hero-content text-center",children:(0,S.jsx)(s.U3,{})})})})}}}]);