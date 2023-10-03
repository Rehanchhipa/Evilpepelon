'use client'
import React, {useRef,useEffect,useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'

// `this is a 
// <a href='https://bscscan.com/address/0x5D386747119172d630A418cBb2F8673179870308' target='_blank' rel='noopener noreferrer' style='color:red'> external</a>
//  link`,
const card = [
  {
    heading: '',
    data: [
      {
        title: 'PROJECT NAME',
        discription: ['Evilpepelon']
      },
      {
        title: 'CONTRACT ADDRESS',
        discription: ['0x55500a...f698']
      },
      {

        title: 'SYMBOL',
        discription: ['EPE']
      },
      {
        title: 'CATEGORY',
        discription: ['DeFi']
      },
      {
        title: 'AUDIT RELEASE',
        discription: ['Audit Release #815']
      },
      {
        title: 'PLATFORM',
        discription: ['BSC']
      },
      {
        title: 'CONTRACT TYPE',
        discription: ['DAO']
      },
      {
        title: 'BADGE',
        discription: [
        'This is Pinksale contract',
        'Download Certificate',
        'Project InfoCertificate',
        'Audit Timeline']
      },
      {
        title: 'AUDIT REQUEST',
        discription: ['2023-09-07']
      },
      {
        title: 'AUDIT ONBOARD',
        discription: ['2023-09-07']
      },
      {
        title: 'REVISION AT',
        discription: ['No']
      },
      {
        title: 'RELEASE AT',
        discription: ['No Revision']
      },
    ]
  },
  {
    heading: 'TOKEN INFORMATION',
    data: [
      {
        title: 'TOKEN NAME',
        discription: ['Evilpepelon']
      },
      {
        title:'TOKEN SYMBOL',
        discription:['EPE'],
      },
      {
        title:'TOKEN DECIMAL',
        discription:['18'],
      },
      {
        title:'TOTAL SUPPLY',
        discription:['100,000,000'],
      },
      {
        title:'HOLDER COUNT',
        discription:['1'],
      },
      {
        title:'CONTRACT ADDRESS',
        discription:['0x55...f698'],
      },
      {
        title:'CONTRACT VERIFIED?',
        discription:['Yes'],
      },
      {
        title:'ROJECTS AGE',
        discription:['1h, 20m, 51s'],
      },
      {
        title:'CONTRACT TYPE',
        discription:['BEP20'],
      },
      {
        title:'COMPILER',
        discription:['v0.8.4+commit.c7e474f2'],
      },
      {
        title:'SOL LICENSE',
        discription:['MIT'],
      },
      {
        title:'CONTRACT NAME',
        discription:['BABYTOKEN'],
      },
      {
        title:'CONTRACT CREATED',
        discription:['Sep-07-2023 05:45:39 AM +UTC'],
      },
      {
        title:'CONTRACT LANGUAGE',
        discription:['Solidity'],
      },
      {
        title:'RELATED AUDIT',
        discription:['Available'],
      }, 
    ]
  },
  {
    heading:'OWNER & DEPLOYER INFORMATION',
    data:[
      {
        title:'OWNER ADDRESS',
        discription:['0xeb...c4e5']
      },
      {
        title:'OWNER BALANCE',
        discription:['100,000,000']
      },
      {
        title:'OWNER PERCENT',
        discription:['100%']
      },
      {
        title:'DEPLOYER PERCENT',
        discription:['100%']
      },
      {
        title:'DEPLOYER ADDRESS',
        discription:['0xeb...c4e5']
      },
      {
        title:'OWNER BALANCE',
        discription:['100,000,000']
      },
      {
        title:'DEPLOYER BALANCE',
        discription:['100,000,000']
      },
    ]
  },
  {
    heading:'PROJECT INFORMATION TRUST SCORE',
    heading1:'Information About Trust Score Very Good85%',
    data:[
      {
        title:'SAFETY OVERVIEW',
        discription:['0 Minor 0 Medium 0 Major 0 Critical 3 Informational']
      },
      {
        title:'AUDIT LINK SHARE',
        discription:['Share this audit result to your community']
      },
      {
        title:'OVERVIEW INFORMATION',
        discription:['Overview contract information']
      },
      {
        title:'MINTING',
        discription:['No mint function found']
      },
      {
        title:'BLACKLIST',
        discription:['The owner can not set blacklist']
      },
      {
        title:'HONEYPOT',
        discription:['Liquidity has not been added']
      },
      {
        title:'CAN TAKE BACK OWNERSHIP',
        discription:['The owner can not take back ownership']
      },
      {
        title:'MODIFY FEES BUY',
        discription:['The owner can not set buy fees over 25%']
      },
      {
        title:'MODIFY FEES SELL',
        discription:['The owner can not set sell fees over 25%']
      },
      {
        title:'PROXY',
        discription:['Proxy Contract Not Detected']
      },
      {
        title:'MAX TX AMOUNT',
        discription:['The owner can not set max tx amount']
      },
      {
        title:'ANTI WHALE',
        discription:['Not Detected']
      },
      {
        title:'TRANSFER PAUSABLE',
        discription:['The owner can not set time selling interval']
      },
      {
        title:'WHITELISTED',
        discription:['The owner can set exemption and dividend fee. BSF57']
      },
      {
        title:'OWNER CHANGE BALANCE',
        discription:['The owner can not change balance address']
      },
      {
        title:'HIDDEN OWNER',
        discription:['Hidden Owner Not Detected']
      },
      {
        title:'CANNOT SELL ALL',
        discription:['Liquidity has not been added']
      },
      {
        title:'CANNOT BUY',
        discription:['Liquidity has not been added']
      },
      {
        title:'SELF DESTRUCT',
        discription:['Not Detected']
      },
      {
        title:'EXTERNAL CALL',
        discription:['Not Detected']
      },
      {
        title:'ANTI BOT',
        discription:['Not Detected']
      },
      {
        title:'ENABLE TRADING',
        discription:['Not Detected']
      },
      {
        title:'OTHER',
        discription:['Not Detected']
      },
      {
        title:'NOTES',
        discription:['Safe Be Careful Danger Function Detected']
      },
      {
        title:'NOTESTAX / FEES INFORMATION',
        discription:['All information about tax information']
      },
      {
        title:'BUY TAX INFORMATION',
        discription:[
          'Tax on buy information',

          `NAME TAXRECEIVERVALUEMARKETING
          <a href='https://bscscan.com/address/0x5D386747119172d630A418cBb2F8673179870308' target='_blank' rel='noopener noreferrer' style='color:red'>0X5D…03081%</a>
          LIQUIDITY
          <a href='https://bscscan.com/address/0x000000000000000000000000000000000000dEaD' target='_blank' rel='noopener noreferrer' style='color:red'>0X00…DEAD</a>
          2%TOKEN REWARDTO TOKEN HOLDER1%`,
          
          'TOTAL4%'
        ]
      },
      {
        title:'SELL TAX INFORMATION',
        discription:[
          'Tax on sell information',
          `NAME TAXRECEIVERVALUEMARKETING
          <a href='https://bscscan.com/address/0x5D386747119172d630A418cBb2F8673179870308' target='_blank' rel='noopener noreferrer' style='color:red'>0X5D…03081%</a>
          LIQUIDITY
          <a href='https://bscscan.com/address/0x000000000000000000000000000000000000dEaD' target='_blank' rel='noopener noreferrer' style='color:red'>0X00…DEAD</a>
          2%TOKEN REWARDTO TOKEN HOLDER1%`,
          'TOTAL4%'
        ]
      },
      {
        title:'TRANSFER TAX INFORMATION',
        discription:[
          'Tax on transfer information',
          'NAME TAXRECEIVERVALUENO TAX IN THIS CONTRACT%',       
          'TOTAL0%'
        ]
      },
      {
        title:'MANUAL AUDIT',
        discription:[
          'Recap manual audit information',
        'Minor (0)Medium (0)Major (0)Critical (0)Informational (3)'
        ]
      },
    ]
  },
  {
    heading:'MINOR- COULD BE FIXED, WILL NOT BRING PROBLEMS. AUDIT INFORMATION',
    data:[
      {
        title:'EVILPEPELON',
        discription:[
          'View PDF',
          'Manual ReviewStatic AnalysisDynamic AnalysisSymbolic ExecutionSWC Check'
        ]
      },
      {
        title:'LICENSE',
        discription:[
          'MIT',
        '100.0%Total3',
        'Critical',
        'Major',
        'Medium',
        'Minor',
        'Informational',
        'Audit Timeline',
      ]
      },
      {
        title:'ISSUE INFORMATION',
        discription:[
        'Translator',
        'Translator',
        'Critical Count: 0', 
        'Major Count: 0',
        'Medium Count: 0',
        'Minor Count: 0',
        'Informational Count: 3'
      ]
      },
      {
        title:'ISSUE TAGS',
        discription:[
        'No Tags',
        'No Tags',
        'No Tags',
        'No Tags',
        'Safemath',
        'Whitelist',
        'Set Fees'
      ]
      },
      {
        title:'CONTRACT INHERITANCE',
        discription:[
          'Translator',
          '',
          '',
          '',
          'Information about contract inheritance and relation'
        ]
      },
      {
        title:'DEX INFORMATION',
        discription:[
          'Information about dex list',
        `PancakeV2`,
        '$0',
        `<a href='https://bscscan.com/address/0xf8fca9a2c41c77de9421ca26c48e00fa36d5adfd' target='_blank' rel='noopener noreferrer' style='color:red'>0xf8…adfd</a>`
        ]
      },
      {
        title:'WEBSITE INFORMATION',
        discription:[
          'Information about project website',
          `<a href='https://themefixes.com/evelpepelon/' target='_blank' rel='noopener noreferrer' style='color:red'>https://evilpepelon.com/</a>`          
      ]
      },
      {
        title:'SSL STATUS',
        discription:[
          'Translator',
          '',
          '',
          '',
          'Secured',
          '',
          '',
          '',
      ]
      },
      {
        title:'WEBSITE DOMAIN',
        discription:['.com']
      },
      {
        title:'WEB STATUS',
        discription:['Not Active / Cloudflare']
      },
      {
        title:'SSL PROVIDER',
        discription:[
          'ZeroSSL',
          'PerformanceAccessibilityBest PracticeSEO1006020619810092Website Stats Chart',
          'Download SVG',
          'Download PNG',
          'Download CSV'
      ]
      },
      {
        title:'SPEED INFORMATION',
        discription:[
          'First Contentful Paint: ms',
          'Fully loaded Time: ms'
        ]
      },
      {
        title:'DOMAIN CHECKER',
        discription:[
          'Translator',
          '',
          '',
          '',
          `Website: 
          <a href='https://themefixes.com/evelpepelon/' target='_blank' rel='noopener noreferrer' style='color:red'>https://evilpepelon.com/</a>`,
          'Location:Kansas City, United States',
          'Region: Missouri'
        ]
      },
      {
        title:'TOKEN HOLDER & LP INFORMATION',
        discription:[
          'Information about token holder and liquidity protocol',
          'Search:',
          `#Contract AddressBalance1
          <a href='https://bscscan.com/token/0xeb55d30604942db8710cbf62850e1381e400c4e5' target='_blank' rel='noopener noreferrer' style='color:red'>0xeb5…c4e5</a>`,  
          '$100,000,000'
        ]
      },
      {
        title:'BLOCKSAFU AUTOMATIC VULNERABILITY SCAN',
        discription:[
          'Vuln list information and explanation',
          'Functions that send Ether to arbitrary destinations',
          'arbitrary-send-eth',
          'High',
          'Medium',
          'Reentrancy vulnerabilities',
          'reentrancy-eth',
          'High',
          'Medium',
          'Reentrancy vulnerabilities',
          'reentrancy-no-eth',
          'Medium',
          'Medium',
          'Uninitialized local variables',
          'uninitialized-local',
          'Medium',
          'Medium',
          'Unused return',
          'unused-return',
          'Medium',
          'Medium',
          'Local variable shadowing',
          'shadowing-local',
          'Low',
          'High',
          'Missing events arithmetic',
          'events-maths',
          'Low',
          'Medium',
          'Missing zero address validation',
          'missing-zero-check',
          'Low',
          'Medium',
          'Calls inside a loop',
          'calls-loop',
          'Low',
          'Medium',
          'Reentrancy vulnerabilities',
          'reentrancy-benign',
          'Low',
          'Medium',
          'Reentrancy vulnerabilities',
          'reentrancy-events',
          'Low',
          'Medium',
          'Block timestamp',
          'timestamp',
          'Low',
          'Medium',
          'Assembly usage',
          'assembly',
          'Informational',
          'High',
          'cyclomatic-complexity',
          'Informational',
          'High',
          'Dead-code',
          'dead-code',
          'Informational',
          'Medium',
          'Incorrect versions of Solidity',
          'solc-version',
          'Informational',
          'High',
          'Low-level calls',
          'low-level-calls',
          'Informational',
          'High',
          'Conformance to Solidity naming conventions',
          'naming-convention',
          'Informational',
          'High',
          'Variable names too similar',
          'similar-names',
          'Informational',
          'Medium',
          'Too many digits',
          'too-many-digits',
          'Informational',
          'Medium',
          'Unused state variable',
          'unused-state',
          'Informational',
          'High',
          'immutable-states',
          'Optimization',
          'High'
        ]
      },
      {
        title:'FUNCTION SUMMARY',
        discription:[
          'All information about function summary',

`1Contract BABYTOKENDividendTracker 2Contract vars: [‘rewardToken’, ‘magnitude’, ‘magnifiedDividendPerShare’, ‘magnifiedDividendCorrections’, ‘withdrawnDividends’, ‘totalDividendsDistributed’, ‘tokenHoldersMap’, ‘lastProcessedIndex’, ‘excludedFromDividends’, ‘lastClaimTimes’, ‘claimWait’, ‘minimumTokenBalanceForDividends’] 3Inheritance:: [‘DividendPayingToken’, ‘DividendPayingTokenOptionalInterface’, ‘DividendPayingTokenInterface’, ‘OwnableUpgradeable’, ‘ERC20Upgradeable’, ‘IERC20MetadataUpgradeable’, ‘IERC20Upgradeable’, ‘ContextUpgradeable’, ‘Initializable’] 4 5+—————————————————+————+—————–+—————————————————————+————————————————————+———————————————————-+——————————————————————————————————————————————————————————————————————————————–+———————–+ 6| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity | 7+—————————————————+————+—————–+—————————————————————+————————————————————+———————————————————-+——————————————————————————————————————————————————————————————————————————————–+———————–+ 8| __DividendPayingToken_init(address,string,string) | internal | [‘initializer’] | [] | [‘rewardToken’] | [‘__ERC20_init’, ‘__Ownable_init’] | [] | 1 | 9| | | | | | [‘initializer’] | | | 10| distributeCAKEDividends(uint256) | public | [‘onlyOwner’] | [‘magnifiedDividendPerShare’, ‘magnitude’] | [‘magnifiedDividendPerShare’, ‘totalDividendsDistributed’] | [‘onlyOwner’, ‘require(bool)’] | [‘(amount).mul(magnitude)’, ‘magnifiedDividendPerShare.add((amount).mul(magnitude) / totalSupply())’] | 2 | 11| | | | [‘msg.sender’, ‘totalDividendsDistributed’] | | [‘totalSupply’] | [‘totalDividendsDistributed.add(amount)’] | | 12| withdrawDividend() | public | [] | [‘msg.sender’] | [] | [‘_withdrawDividendOfUser’] | [] | 1 | 13| withdrawDividendOfUser(address) | internal | [] | [‘rewardToken’, ‘withdrawnDividends’] | [‘withdrawnDividends’] | [‘withdrawableDividendOf’] | [‘SafeERC20NoRevert.safeTransfer(IERC20(rewardToken),user,withdrawableDividend)’, ‘withdrawnDividends[user].add(_withdrawableDividend)’] | 1 | 14| | | | | | | [‘withdrawnDividends[user].sub(_withdrawableDividend)’] | | 15| dividendOf(address) | public | [] | [] | [] | [‘withdrawableDividendOf’] | [] | 1 | 16| withdrawableDividendOf(address) | public | [] | [‘withdrawnDividends’] | [] | [‘accumulativeDividendOf’] | [‘accumulativeDividendOf(_owner).sub(withdrawnDividends[_owner])’] | 1 | 17| withdrawnDividendOf(address) | public | [] | [‘withdrawnDividends’] | [] | [] | [] | 1 | 18| accumulativeDividendOf(address) | public | [] | [‘magnifiedDividendCorrections’, ‘magnifiedDividendPerShare’] | [] | [‘balanceOf’] | [‘magnifiedDividendPerShare.mul(balanceOf(_owner))’, ‘magnifiedDividendPerShare.mul(balanceOf(_owner)).toInt256Safe()’] | 1 | 19| | | | [‘magnitude’] | | | [‘magnifiedDividendPerShare.mul(balanceOf(_owner)).toInt256Safe().add(magnifiedDividendCorrections[_owner])’, ‘magnifiedDividendPerShare.mul(balanceOf(_owner)).toInt256Safe().add(magnifiedDividendCorrections[_owner]).toUint256Safe()’] | | 20| transfer(address,address,uint256) | internal | [] | [‘magnifiedDividendCorrections’, ‘magnifiedDividendPerShare’] | [‘magnifiedDividendCorrections’] | [‘require(bool)’] | [‘magnifiedDividendCorrections[from].add(magCorrection)’, ‘magnifiedDividendCorrections[to].sub(_magCorrection)’] | 1 | 21| | | | | | | [‘magnifiedDividendPerShare.mul(value)’, ‘magnifiedDividendPerShare.mul(value).toInt256Safe()’] | | 22| mint(address,uint256) | internal | [] | [‘magnifiedDividendCorrections’, ‘magnifiedDividendPerShare’] | [‘magnifiedDividendCorrections’] | [‘mint’] | [‘(magnifiedDividendPerShare.mul(value)).toInt256Safe()’, ‘magnifiedDividendCorrections[account].sub((magnifiedDividendPerShare.mul(value)).toInt256Safe())’] | 1 | 23| | | | | | | [‘magnifiedDividendPerShare.mul(value)’] | | 24| burn(address,uint256) | internal | [] | [‘magnifiedDividendCorrections’, ‘magnifiedDividendPerShare’] | [‘magnifiedDividendCorrections’] | [‘burn’] | [‘(magnifiedDividendPerShare.mul(value)).toInt256Safe()’, ‘magnifiedDividendCorrections[account].add((magnifiedDividendPerShare.mul(value)).toInt256Safe())’] | 1 | 25| | | | | | | [‘magnifiedDividendPerShare.mul(value)’] | | 26| setBalance(address,uint256) | internal | [] | [] | [] | [‘burn’, ‘_mint’] | [‘currentBalance.sub(newBalance)’, ‘newBalance.sub(currentBalance)’] | 3 | 27| | | | | | [‘balanceOf’] | | | 28| withdrawableDividendOf(address) | external | [] | [] | [] | [] | [] | 2 | 29| withdrawnDividendOf(address) | external | [] | [] | [] | [] | [] | 2 | 30| accumulativeDividendOf(address) | external | [] | [] | [] | [] | [] | 2 | 31| dividendOf(address) | external | [] | [] | [] | [] | [] | 2 | 32| withdrawDividend() | external | [] | [] | [] | [] | [] | 2 | 33| __Ownable_init() | internal | [‘initializer’] | [] | [] | [‘__Context_init_unchained’, ‘__Ownable_init_unchained’] | [] | 1 | 34| | | | | | [‘initializer’] | | | 35| __Ownable_init_unchained() | internal | [‘initializer’] | [] | [] | [‘_msgSender’, ‘_setOwner’] | [] | 1 | 36| | | | | | [‘initializer’] | | | 37| owner() | public | [] | [‘_owner’] | [] | [] | [] | 1 | 38| renounceOwnership() | public | [‘onlyOwner’] | [] | [] | [‘_setOwner’, ‘onlyOwner’] | [] | 1 | 39| transferOwnership(address) | public | [‘onlyOwner’] | [] | [] | [‘_setOwner’, ‘onlyOwner’] | [] | 1 | 40| | | | | | [‘require(bool,string)’] | | | 41| setOwner(address) | private | [] | [‘owner’] | [‘_owner’] | [] | [] | 1 | 42| __Context_init() | internal | [‘initializer’] | [] | [] | [‘__Context_init_unchained’, ‘initializer’] | [] | 1 | 43| __Context_init_unchained() | internal | [‘initializer’] | [] | [] | [‘initializer’] | [] | 1 | 44| msgSender() | internal | [] | [‘msg.sender’] | [] | [] | [] | 1 | 45| msgData() | internal | [] | [‘msg.data’] | [] | [] | [] | 1 | 46| __ERC20_init(string,string) | internal | [‘initializer’] | [] | [] | [‘__Context_init_unchained’, ‘__ERC20_init_unchained’] | [] | 1 | 47| | | | | | [‘initializer’] | | | 48| __ERC20_init_unchained(string,string) | internal | [‘initializer’] | [] | [‘_name’, ‘_symbol’] | [‘initializer’] | [] | 1 | 49| name() | public | [] | [‘_name’] | [] | [] | [] | 1 | 50| symbol() | public | [] | [‘_symbol’] | [] | [] | [] | 1 | 51| decimals() | public | [] | [] | [] | [] | [] | 1 | 52| totalSupply() | public | [] | [‘_totalSupply’] | [] | [] | [] | 1 | 53| balanceOf(address) | public | [] | [‘_balances’] | [] | [] | [] | 1 | 54| transfer(address,uint256) | public | [] | [] | [] | [‘_msgSender’, ‘_transfer’] | [] | 1 | 55| allowance(address,address) | public | [] | [‘_allowances’] | [] | [] | [] | 1 | 56| approve(address,uint256) | public | [] | [] | [] | [‘_approve’, ‘_msgSender’] | [] | 1 | 57| transferFrom(address,address,uint256) | public | [] | [‘_allowances’] | [] | [‘_approve’, ‘_msgSender’] | [] | 1 | 58| | | | | | [‘_transfer’, ‘require(bool,string)’] | | | 59| increaseAllowance(address,uint256) | public | [] | [‘_allowances’] | [] | [‘_approve’, ‘_msgSender’] | [] | 1 | 60| decreaseAllowance(address,uint256) | public | [] | [‘_allowances’] | [] | [‘_approve’, ‘_msgSender’] | [] | 1 | 61| | | | | | [‘require(bool,string)’] | | | 62| transfer(address,address,uint256) | internal | [] | [‘balances’] | [‘_balances’] | [‘_afterTokenTransfer’, ‘_beforeTokenTransfer’] | [] | 1 | 63| | | | | | [‘require(bool,string)’] | | | 64| mint(address,uint256) | internal | [] | [‘balances’, ‘_totalSupply’] | [‘_balances’, ‘_totalSupply’] | [‘_afterTokenTransfer’, ‘_beforeTokenTransfer’] | [] | 1 | 65| | | | | | [‘require(bool,string)’] | | | 66| burn(address,uint256) | internal | [] | [‘balances’, ‘_totalSupply’] | [‘_balances’, ‘_totalSupply’] | [‘_afterTokenTransfer’, ‘_beforeTokenTransfer’] | [] | 1 | 67| | | | | | [‘require(bool,string)’] | | | 68| approve(address,address,uint256) | internal | [] | [] | [‘allowances’] | [‘require(bool,string)’] | [] | 1 | 69| beforeTokenTransfer(address,address,uint256) | internal | [] | [] | [] | [] | [] | 1 | 70| afterTokenTransfer(address,address,uint256) | internal | [] | [] | [] | [] | [] | 1 | 71| name() | external | [] | [] | [] | [] | [] | 2 | 72| symbol() | external | [] | [] | [] | [] | [] | 2 | 73| decimals() | external | [] | [] | [] | [] | [] | 2 | 74| totalSupply() | external | [] | [] | [] | [] | [] | 2 | 75| balanceOf(address) | external | [] | [] | [] | [] | [] | 2 | 76| transfer(address,uint256) | external | [] | [] | [] | [] | [] | 2 | 77| allowance(address,address) | external | [] | [] | [] | [] | [] | 2 | 78| approve(address,uint256) | external | [] | [] | [] | [] | [] | 2 | 79| transferFrom(address,address,uint256) | external | [] | [] | [] | [] | [] | 2 | 80| initialize(address,uint256) | external | [‘initializer’] | [] | [‘claimWait’, ‘minimumTokenBalanceForDividends’] | [‘__DividendPayingToken_init’, ‘initializer’] | [‘DividendPayingToken.__DividendPayingToken_init(rewardToken_,DIVIDEND_TRACKER,DIVIDEND_TRACKER)’] | 1 | 81| transfer(address,address,uint256) | internal | [] | [] | [] | [‘require(bool,string)’] | [] | 1 | 82| withdrawDividend() | public | [] | [] | [] | [‘require(bool,string)’] | [] | 1 | 83| excludeFromDividends(address) | external | [‘onlyOwner’] | [‘excludedFromDividends’, ‘tokenHoldersMap’] | [‘excludedFromDividends’] | [‘setBalance’, ‘onlyOwner’] | [‘tokenHoldersMap.remove(account)’] | 1 | 84| | | | | | [‘require(bool)’] | | | 85| isExcludedFromDividends(address) | public | [] | [‘excludedFromDividends’] | [] | [] | [] | 1 | 86| updateClaimWait(uint256) | external | [‘onlyOwner’] | [‘claimWait’] | [‘claimWait’] | [‘onlyOwner’, ‘require(bool,string)’] | [] | 1 | 87| updateMinimumTokenBalanceForDividends(uint256) | external | [‘onlyOwner’] | [] | [‘minimumTokenBalanceForDividends’] | [‘onlyOwner’] | [] | 1 | 88| getLastProcessedIndex() | external | [] | [‘lastProcessedIndex’] | [] | [] | [] | 1 | 89| getNumberOfTokenHolders() | external | [] | [‘tokenHoldersMap’] | [] | [] | [] | 1 | 90| getAccount(address) | public | [] | [‘block.timestamp’, ‘claimWait’] | [] | [‘accumulativeDividendOf’, ‘withdrawableDividendOf’] | [‘index.add(int256(processesUntilEndOfArray))’, ‘index.sub(int256(lastProcessedIndex))’] | 6 | 91| | | | [‘lastClaimTimes’, ‘lastProcessedIndex’] | | | [‘lastClaimTime.add(claimWait)’, ‘nextClaimTime.sub(block.timestamp)’] | | 92| | | | [‘tokenHoldersMap’] | | | [‘tokenHoldersMap.getIndexOfKey(account)’, ‘tokenHoldersMap.keys.length.sub(lastProcessedIndex)’] | | 93| getAccountAtIndex(uint256) | public | [] | [‘tokenHoldersMap’] | [] | [‘getAccount’] | [‘tokenHoldersMap.getKeyAtIndex(index)’, ‘tokenHoldersMap.size()’] | 1 | 94| canAutoClaim(uint256) | private | [] | [‘block.timestamp’, ‘claimWait’] | [] | [] | [‘block.timestamp.sub(lastClaimTime)’] | 1 | 95| setBalance(address,uint256) | external | [‘onlyOwner’] | [‘excludedFromDividends’, ‘minimumTokenBalanceForDividends’] | [] | [‘_setBalance’, ‘onlyOwner’] | [‘tokenHoldersMap.remove(account)’, ‘tokenHoldersMap.set(account,newBalance)’] | 2 | 96| | | | [‘tokenHoldersMap’] | | [‘processAccount’] | | | 97| process(uint256) | public | [] | [‘lastClaimTimes’, ‘lastProcessedIndex’] | [‘lastProcessedIndex’] | [‘canAutoClaim’, ‘gasleft()’] | [‘gasLeft.sub(newGasLeft)’, ‘gasUsed.add(gasLeft.sub(newGasLeft))’] | 6 | 98| | | | [‘tokenHoldersMap’] | | [‘processAccount’] | | | 99| processAccount(address,bool) | public | [‘onlyOwner’] | [‘block.timestamp’] | [‘lastClaimTimes’] | [‘_withdrawDividendOfUser’, ‘onlyOwner’] | [] | 1 | 100| slitherConstructorConstantVariables() | internal | [] | [] | [‘magnitude’] | [] | [] | 1 | 101+—————————————————+————+—————–+—————————————————————+————————————————————+———————————————————-+——————————————————————————————————————————————————————————————————————————————–+———————–+ 102 103+—————+————+———————————–+———————————–+————————–+—————-+———————–+ 104| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity | 105+—————+————+———————————–+———————————–+————————–+—————-+———————–+ 106| onlyOwner() | internal | [] | [] | [‘_msgSender’, ‘owner’] | [] | 1 | 107| | | | | [‘require(bool,string)’] | | | 108| initializer() | internal | [‘_initialized’, ‘_initializing’] | [‘_initialized’, ‘_initializing’] | [‘require(bool,string)’] | [] | 3 | 109+—————+————+———————————–+———————————–+————————–+—————-+———————–+ 110 111Contract BaseToken 112Contract vars: [] 113Inheritance:: [] 114 115+———-+————+———–+——+——-+—————-+—————-+———————–+ 116| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity | 117+———-+————+———–+——+——-+—————-+—————-+———————–+ 118+———-+————+———–+——+——-+—————-+—————-+———————–+ 119 120+———–+————+——+——-+—————-+—————-+———————–+ 121| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity | 122+———–+————+——+——-+—————-+—————-+———————–+ 123+———–+————+——+——-+—————-+—————-+———————–+ 124 125Contract BABYTOKEN 126Contract vars: [‘VERSION’, ‘uniswapV2Router’, ‘uniswapV2Pair’, ‘swapping’, ‘dividendTracker’, ‘rewardToken’, ‘swapTokensAtAmount’, ‘tokenRewardsFee’, ‘liquidityFee’, ‘marketingFee’, ‘totalFees’, ‘_marketingWalletAddress’, ‘gasForProcessing’, ‘_isExcludedFromFees’, ‘automatedMarketMakerPairs’] 127Inheritance:: [‘BaseToken’, ‘Ownable’, ‘ERC20’, ‘IERC20Metadata’, ‘IERC20’, ‘Context’] 128 129+———————————————————————————-+————+—————+——————————————————+—————————————————-+————————————————-+——————————————————————————————————————————————–+———————–+ 130| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity | 131+———————————————————————————-+————+—————+——————————————————+—————————————————-+————————————————-+——————————————————————————————————————————————–+———————–+ 132| constructor() | internal | [] | [] | [] | [‘_msgSender’, ‘_setOwner’] | [] | 1 | 133| owner() | public | [] | [‘_owner’] | [] | [] | [] | 1 | 134| renounceOwnership() | public | [‘onlyOwner’] | [] | [] | [‘_setOwner’, ‘onlyOwner’] | [] | 1 | 135| transferOwnership(address) | public | [‘onlyOwner’] | [] | [] | [‘_setOwner’, ‘onlyOwner’] | [] | 1 | 136| | | | | | [‘require(bool,string)’] | | | 137| setOwner(address) | private | [] | [‘owner’] | [‘_owner’] | [] | [] | 1 | 138| msgSender() | internal | [] | [‘msg.sender’] | [] | [] | [] | 1 | 139| msgData() | internal | [] | [‘msg.data’] | [] | [] | [] | 1 | 140| constructor(string,string) | public | [] | [] | [‘_name’, ‘_symbol’] | [] | [] | 1 | 141| name() | public | [] | [‘_name’] | [] | [] | [] | 1 | 142| symbol() | public | [] | [‘_symbol’] | [] | [] | [] | 1 | 143| decimals() | public | [] | [] | [] | [] | [] | 1 | 144| totalSupply() | public | [] | [‘_totalSupply’] | [] | [] | [] | 1 | 145| balanceOf(address) | public | [] | [‘_balances’] | [] | [] | [] | 1 | 146| transfer(address,uint256) | public | [] | [] | [] | [‘_msgSender’, ‘_transfer’] | [] | 1 | 147| allowance(address,address) | public | [] | [‘_allowances’] | [] | [] | [] | 1 | 148| approve(address,uint256) | public | [] | [] | [] | [‘_approve’, ‘_msgSender’] | [] | 1 | 149| transferFrom(address,address,uint256) | public | [] | [‘_allowances’] | [] | [‘_approve’, ‘_msgSender’] | [] | 1 | 150| | | | | | [‘_transfer’, ‘require(bool,string)’] | | | 151| increaseAllowance(address,uint256) | public | [] | [‘_allowances’] | [] | [‘_approve’, ‘_msgSender’] | [] | 1 | 152| decreaseAllowance(address,uint256) | public | [] | [‘_allowances’] | [] | [‘_approve’, ‘_msgSender’] | [] | 1 | 153| | | | | | [‘require(bool,string)’] | | | 154| transfer(address,address,uint256) | internal | [] | [‘balances’] | [‘_balances’] | [‘_afterTokenTransfer’, ‘_beforeTokenTransfer’] | [] | 1 | 155| | | | | | [‘require(bool,string)’] | | | 156| mint(address,uint256) | internal | [] | [‘balances’, ‘_totalSupply’] | [‘_balances’, ‘_totalSupply’] | [‘_afterTokenTransfer’, ‘_beforeTokenTransfer’] | [] | 1 | 157| | | | | | [‘require(bool,string)’] | | | 158| burn(address,uint256) | internal | [] | [‘balances’, ‘_totalSupply’] | [‘_balances’, ‘_totalSupply’] | [‘_afterTokenTransfer’, ‘_beforeTokenTransfer’] | [] | 1 | 159| | | | | | [‘require(bool,string)’] | | | 160| approve(address,address,uint256) | internal | [] | [] | [‘allowances’] | [‘require(bool,string)’] | [] | 1 | 161| beforeTokenTransfer(address,address,uint256) | internal | [] | [] | [] | [] | [] | 1 | 162| afterTokenTransfer(address,address,uint256) | internal | [] | [] | [] | [] | [] | 1 | 163| name() | external | [] | [] | [] | [] | [] | 2 | 164| symbol() | external | [] | [] | [] | [] | [] | 2 | 165| decimals() | external | [] | [] | [] | [] | [] | 2 | 166| totalSupply() | external | [] | [] | [] | [] | [] | 2 | 167| balanceOf(address) | external | [] | [] | [] | [] | [] | 2 | 168| transfer(address,uint256) | external | [] | [] | [] | [] | [] | 2 | 169| allowance(address,address) | external | [] | [] | [] | [] | [] | 2 | 170| approve(address,uint256) | external | [] | [] | [] | [] | [] | 2 | 171| transferFrom(address,address,uint256) | external | [] | [] | [] | [] | [] | 2 | 172| constructor(string,string,uint256,address[4],uint256[3],uint256,address,uint256) | public | [] | [‘VERSION’, ‘_marketingWalletAddress’] | [‘_isExcludedFromFees’, ‘_marketingWalletAddress’] | [‘_mint’, ‘_setAutomatedMarketMakerPair’] | [‘Clones.clone(addrs[3])’, ‘IUniswapV2Factory(_uniswapV2Router.factory()).createPair(address(this),_uniswapV2Router.WETH())’] | 1 | 173| | | | [‘dividendTracker’, ‘liquidityFee’] | [‘dividendTracker’, ‘gasForProcessing’] | [‘constructor’, ‘owner’] | [‘_marketingWalletAddress.isContract()’, ‘_uniswapV2Router.WETH()’] | | 174| | | | [‘marketingFee’, ‘msg.sender’] | [‘liquidityFee’, ‘marketingFee’] | [‘require(bool,string)’] | [‘_uniswapV2Router.factory()’, ‘address(serviceFeeReceiver_).transfer(serviceFee_)’] | | 175| | | | [‘rewardToken’, ‘this’] | [‘rewardToken’, ‘swapTokensAtAmount’] | | [‘dividendTracker.excludeFromDividends(address(0xdead))’, ‘dividendTracker.excludeFromDividends(address(_uniswapV2Router))’] | | 176| | | | [‘tokenRewardsFee’, ‘totalFees’] | [‘tokenRewardsFee’, ‘totalFees’] | | [‘dividendTracker.excludeFromDividends(address(dividendTracker))’, ‘dividendTracker.excludeFromDividends(address(this))’] | | 177| | | | | [‘uniswapV2Pair’, ‘uniswapV2Router’] | | [‘dividendTracker.excludeFromDividends(owner())’, ‘dividendTracker.initialize(rewardToken,minimumTokenBalanceForDividends_)’] | | 178| | | | | | | [‘tokenRewardsFee.add(liquidityFee)’, ‘tokenRewardsFee.add(liquidityFee).add(marketingFee)’] | | 179| | | | | | | [‘totalSupply_.div(1000)’] | | 180| receive() | external | [] | [] | [] | [] | [] | 1 | 181| setSwapTokensAtAmount(uint256) | external | [‘onlyOwner’] | [] | [‘swapTokensAtAmount’] | [‘onlyOwner’, ‘require(bool,string)’] | [] | 1 | 182| | | | | | [‘totalSupply’] | | | 183| excludeFromFees(address) | external | [‘onlyOwner’] | [‘_isExcludedFromFees’] | [‘_isExcludedFromFees’] | [‘onlyOwner’, ‘require(bool,string)’] | [] | 1 | 184| excludeMultipleAccountsFromFees(address[]) | external | [‘onlyOwner’] | [] | [‘_isExcludedFromFees’] | [‘onlyOwner’] | [] | 2 | 185| setMarketingWallet(address) | external | [‘onlyOwner’] | [] | [‘_marketingWalletAddress’] | [‘onlyOwner’, ‘require(bool,string)’] | [‘wallet.isContract()’] | 1 | 186| setTokenRewardsFee(uint256) | external | [‘onlyOwner’] | [‘liquidityFee’, ‘marketingFee’] | [‘tokenRewardsFee’, ‘totalFees’] | [‘onlyOwner’, ‘require(bool,string)’] | [‘tokenRewardsFee.add(liquidityFee)’, ‘tokenRewardsFee.add(liquidityFee).add(marketingFee)’] | 1 | 187| | | | [‘tokenRewardsFee’, ‘totalFees’] | | | | | 188| setLiquiditFee(uint256) | external | [‘onlyOwner’] | [‘liquidityFee’, ‘marketingFee’] | [‘liquidityFee’, ‘totalFees’] | [‘onlyOwner’, ‘require(bool,string)’] | [‘tokenRewardsFee.add(liquidityFee)’, ‘tokenRewardsFee.add(liquidityFee).add(marketingFee)’] | 1 | 189| | | | [‘tokenRewardsFee’, ‘totalFees’] | | | | | 190| setMarketingFee(uint256) | external | [‘onlyOwner’] | [‘liquidityFee’, ‘marketingFee’] | [‘marketingFee’, ‘totalFees’] | [‘onlyOwner’, ‘require(bool,string)’] | [‘tokenRewardsFee.add(liquidityFee)’, ‘tokenRewardsFee.add(liquidityFee).add(marketingFee)’] | 1 | 191| | | | [‘tokenRewardsFee’, ‘totalFees’] | | | | | 192| setAutomatedMarketMakerPair(address,bool) | private | [] | [‘automatedMarketMakerPairs’, ‘dividendTracker’] | [‘automatedMarketMakerPairs’] | [‘require(bool,string)’] | [‘dividendTracker.excludeFromDividends(pair)’] | 2 | 193| updateGasForProcessing(uint256) | public | [‘onlyOwner’] | [‘gasForProcessing’] | [‘gasForProcessing’] | [‘onlyOwner’, ‘require(bool,string)’] | [] | 1 | 194| updateClaimWait(uint256) | external | [‘onlyOwner’] | [‘dividendTracker’] | [] | [‘onlyOwner’] | [‘dividendTracker.updateClaimWait(claimWait)’] | 1 | 195| getClaimWait() | external | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.claimWait()’] | 1 | 196| updateMinimumTokenBalanceForDividends(uint256) | external | [‘onlyOwner’] | [‘dividendTracker’] | [] | [‘onlyOwner’] | [‘dividendTracker.updateMinimumTokenBalanceForDividends(amount)’] | 1 | 197| getMinimumTokenBalanceForDividends() | external | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.minimumTokenBalanceForDividends()’] | 1 | 198| getTotalDividendsDistributed() | external | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.totalDividendsDistributed()’] | 1 | 199| isExcludedFromFees(address) | public | [] | [‘isExcludedFromFees’] | [] | [] | [] | 1 | 200| withdrawableDividendOf(address) | public | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.withdrawableDividendOf(account)’] | 1 | 201| dividendTokenBalanceOf(address) | public | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.balanceOf(account)’] | 1 | 202| excludeFromDividends(address) | external | [‘onlyOwner’] | [‘dividendTracker’] | [] | [‘onlyOwner’] | [‘dividendTracker.excludeFromDividends(account)’] | 1 | 203| isExcludedFromDividends(address) | public | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.isExcludedFromDividends(account)’] | 1 | 204| getAccountDividendsInfo(address) | external | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.getAccount(account)’] | 1 | 205| getAccountDividendsInfoAtIndex(uint256) | external | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.getAccountAtIndex(index)’] | 1 | 206| processDividendTracker(uint256) | external | [] | [‘dividendTracker’, ‘tx.origin’] | [] | [] | [‘dividendTracker.process(gas)’] | 1 | 207| claim() | external | [] | [‘dividendTracker’, ‘msg.sender’] | [] | [] | [‘dividendTracker.processAccount(address(msg.sender),false)’] | 1 | 208| getLastProcessedIndex() | external | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.getLastProcessedIndex()’] | 1 | 209| getNumberOfDividendTokenHolders() | external | [] | [‘dividendTracker’] | [] | [] | [‘dividendTracker.getNumberOfTokenHolders()’] | 1 | 210| transfer(address,address,uint256) | internal | [] | [‘isExcludedFromFees’, ‘automatedMarketMakerPairs’] | [‘swapping’] | [‘_transfer’, ‘balanceOf’] | [‘amount.mul(totalFees)’, ‘amount.mul(totalFees).div(100)’] | 14 | 211| | | | [‘dividendTracker’, ‘gasForProcessing’] | | [‘owner’, ‘require(bool,string)’] | [‘amount.sub(fees)’, ‘contractTokenBalance.mul(liquidityFee)’] | | 212| | | | [‘liquidityFee’, ‘marketingFee’] | | [‘swapAndLiquify’, ‘swapAndSendDividends’] | [‘contractTokenBalance.mul(liquidityFee).div(totalFees)’, ‘contractTokenBalance.mul(marketingFee)’] | | 213| | | | [‘swapTokensAtAmount’, ‘swapping’] | | [‘swapAndSendToFee’] | [‘contractTokenBalance.mul(marketingFee).div(totalFees)’, ‘dividendTracker.process(gas)’] | | 214| | | | [‘this’, ‘totalFees’] | | | [‘dividendTracker.setBalance(address(from),balanceOf(from))’, ‘dividendTracker.setBalance(address(to),balanceOf(to))’] | | 215| | | | [‘tx.origin’] | | | | | 216| swapAndSendToFee(uint256) | private | [] | [‘_marketingWalletAddress’, ‘rewardToken’] | [] | [‘swapTokensForCake’] | [‘(IERC20(rewardToken).balanceOf(address(this))).sub(initialCAKEBalance)’, ‘IERC20(rewardToken).balanceOf(address(this))’] | 1 | 217| | | | [‘this’] | | | [‘IERC20(rewardToken).balanceOf(address(this))’, ‘IERC20(rewardToken).safeTransfer(_marketingWalletAddress,newBalance)’] | | 218| swapAndLiquify(uint256) | private | [] | [‘this’] | [] | [‘addLiquidity’, ‘balance(address)’] | [‘address(this).balance.sub(initialBalance)’, ‘tokens.div(2)’] | 1 | 219| | | | | | [‘swapTokensForEth’] | [‘tokens.sub(half)’] | | 220| swapTokensForEth(uint256) | private | [] | [‘block.timestamp’, ‘this’] | [] | [‘_approve’] | [‘new address[](2)’, ‘uniswapV2Router.WETH()’] | 1 | 221| | | | [‘uniswapV2Router’] | | | [‘uniswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(tokenAmount,0,path,address(this),block.timestamp)’] | | 222| swapTokensForCake(uint256) | private | [] | [‘block.timestamp’, ‘rewardToken’] | [] | [‘_approve’] | [‘new address[](3)’, ‘uniswapV2Router.WETH()’] | 1 | 223| | | | [‘this’, ‘uniswapV2Router’] | | | [‘uniswapV2Router.swapExactTokensForTokensSupportingFeeOnTransferTokens(tokenAmount,0,path,address(this),block.timestamp)’] | | 224| addLiquidity(uint256,uint256) | private | [] | [‘block.timestamp’, ‘this’] | [] | [‘_approve’] | [‘uniswapV2Router.addLiquidityETH{value: ethAmount}(address(this),tokenAmount,0,0,address(0xdead),block.timestamp)’] | 1 | 225| | | | [‘uniswapV2Router’] | | | | | 226| swapAndSendDividends(uint256) | private | [] | [‘dividendTracker’, ‘rewardToken’] | [] | [‘swapTokensForCake’] | [‘IERC20(rewardToken).balanceOf(address(this))’, ‘SafeERC20NoRevert.safeTransfer(IERC20(rewardToken),address(dividendTracker),dividends)’] | 2 | 227| | | | [‘this’] | | | [‘dividendTracker.distributeCAKEDividends(dividends)’] | | 228| slitherConstructorConstantVariables() | internal | [] | [] | [‘VERSION’] | [] | [] | 1 | 229+———————————————————————————-+————+—————+——————————————————+—————————————————-+————————————————-+——————————————————————————————————————————————–+———————–+ 230 231+————-+————+——+——-+————————–+—————-+———————–+ 232| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity | 233+————-+————+——+——-+————————–+—————-+———————–+ 234| onlyOwner() | internal | [] | [] | [‘_msgSender’, ‘owner’] | [] | 1 | 235| | | | | [‘require(bool,string)’] | | | 236+————-+————+——+——-+————————–+—————-+———————–+ 237,`
      ]
      },
      {
        title:'DISCLAIMER',
        discription:[
          'This audit provides a technical evaluation of the associated project’s smart contract. It aims to enhance security and value perception but does not guarantee safety or profitability. The audit isn’t an endorsement of the project and doesn’t absolve investors from conducting their due diligence.',

'Liability for any losses related to the use or interpretation of this audit is expressly disclaimed. Investing in blockchain and cryptocurrency projects inherently involves risk, and investors should only commit funds they are prepared to lose.',

'Investors are strongly advised to “Do Your Research” (DYOR). Here’s a simplified checklist to guide the DYOR process:',


`1. Research the project and team.<br />
2. Review audits and code.<br />
3. Analyze token metrics and unlock dates.<br />
4. Verify self-contribution in the launchpad pool.<br />
5. Understand the token’s functions and features.<br />
6. Investigate token explorer comments.<br />
7. Assess community activity and reviews.<br />
8. Verify partnerships and compare the roadmap with the team’s capabilities.<br />
9. Trust your intuition and evaluate risks.`,
        ]
      },
 
    ]
  },
]

const page = () => {

  return (
    <div className='bg-blue-700 text-white w-full h-full pb-4 '>
      <div>
        {
          card.map((v,i) => {
            return(
              <div key={i}>
              <div className='flex lg:w-10/12 mx-4 md:mx-2 lg:mx-auto' style={v.heading.length > 2 ?{borderBottom:'2px dashed white'}:{}}>
                <div className='mx-auto'>

                <p className='text-2xl sm:text-3xl md:text-4xl text-center font-bold flex my-4 mx-auto'>{v.heading}</p>
                {
                  v.heading1?
                  <p className='text-sm md:text-lg text-center flex my-2 mx-auto' style={{maxWidth:'fit-content'}}>{v.heading1}</p>
                  :
                  ''
                }
                </div>
              </div>
              {
                v.data.map((value,index)=>{
                  return(
                  <div key={index} className='md:flex lg:w-10/12 mx-4 md:mx-2 lg:mx-auto border-dashed border-b-2 border-white items-center'>
                    <div className='px-2 md:w-6/12' style={{ }}>
                      <p className='text-2xl md:text-4xl font-bold'>{value.title}</p>
                    </div>
                    <div className='border-dashed border-l-2 px-2 md:w-6/12' style={{alignItems:'center' }}>
                      {
                        value.discription.map((value1,index1) =>{
                          return(
                            <div key={index1} className='text-lg-1xl md:text-lg py-3 md:py-5' style={{fontWeight:'600',width:'100%',overflow:'hidden'}} dangerouslySetInnerHTML={{ __html: value1 }}></div>
                      
                          )
                        })
                      }
                    </div>
                  </div>
                  )
                })
              }
              </div>
            )
          })
        }
       
      </div>
    </div>
  )
}

export default page
