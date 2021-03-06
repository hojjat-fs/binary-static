import React      from 'react';
import { Table }  from '../../_common/components/elements.jsx';
import {
    TabContainer,
    TabContent,
    TabContentContainer,
    TabsSubtabs } from '../../_common/components/tabs.jsx';

const ArrowsMobile = ({ direction, parent }) => (
    <div className='align-self-center gr-2 gr-hide gr-show-m gr-no-gutter'>
        <img
            className={`go-${direction} gr-5 gr-no-gutter gr-centered`}
            data-parent={parent}
            src={it.url_for(`images/pages/home/arrow_${direction}.svg`)}
        />
    </div>
);

const TypesOfPartnership = () => (
    <section className='type-of-partner primary-bg-color'>
        <div className='container center-text gr-padding-30'>
            <h2>{it.L('The types of partnerships we offer')}</h2>
            <p className='color-white'>{it.L('Depending on what you do, you can apply as our Affiliate or Introducing Broker, or both. More new clients from you means higher potential commissions.')}
            </p>
            <div className='has-tabs'>
                <ul className='gr-row'>
                    <li className='gr-6'><a href='#affiliate'>{it.L('Affiliate')}</a></li>
                    <li className='gr-6'><a href='#ib'>{it.L('Introducing Broker (IB)')}</a></li>
                </ul>
                <div id='affiliate'>
                    <div className='gr-12 white-bg-color'>
                        <p className='gr-padding-20 no-margin'>{it.L('Earn up to 45% in commission based on the total net revenue generated by your clients. Commissions are credited into your account after the 15th of every month.')}</p>
                        <h3 className='secondary-color'>{it.L('Commision structure')}</h3>
                        <TabContainer className='gr-padding-30 gr-parent full-width gr-11 gr-12-m gr-centered' theme='light'>
                            <div className='gr-row gr-hide gr-show-m mobile-menu'>
                                <ArrowsMobile parent='commission_structure' direction='left' />
                                <strong id='tab_mobile_header' className='align-self-center gr-8' />
                                <ArrowsMobile parent='commission_structure' direction='right' />
                            </div>
                            <TabsSubtabs
                                id='commission_structure'
                                className='gr-parent tab-selector-wrapper gr-hide-m'
                                items={[
                                    { id: 'revenue',   text: it.L('Revenue Share') },
                                    { id: 'turnover',  text: it.L('Turnover') },
                                    { id: 'cpa',       text: it.L('CPA (EU only)') },
                                    { id: 'commission_structure_selector', className: 'tab-selector' },
                                ]}
                            />
                            <div className='tab-content'>
                                <TabContentContainer>
                                    <TabContent id='revenue' className='selectedTab'>
                                        <div className='gr-11 gr-12-m gr-centered'>
                                            <p className='no-margin text-align-left'>{it.L('Our commission structure is a simple 2-tiered plan.')}</p>
                                            <Table
                                                data={{
                                                    thead: [
                                                        [
                                                            { text: it.L('Tier') },
                                                            { text: it.L('Total net revenue per month (USD)') },
                                                            { text: it.L('Commission rates') },
                                                        ],
                                                    ],
                                                    tbody: [
                                                        [
                                                            { text: it.L('1') },
                                                            { text: it.L('$0 - $20,000') },
                                                            { text: it.L('30%') },
                                                        ],
                                                        [
                                                            { text: it.L('2') },
                                                            { text: it.L('$20,001 and above') },
                                                            { text: it.L('45%') },
                                                        ],
                                                    ],
                                                }}
                                            />
                                            <a href={it.affiliate_signup_url} className='button' target='_blank' rel='noopener noreferrer'>
                                                <span>{it.L('Sign up now')}</span>
                                            </a>
                                        </div>
                                    </TabContent>
                                    <TabContent id='turnover'>
                                        <div className='gr-11 gr-centered'>
                                            <p className='no-margin text-align-left'>{it.L('Our turnover-based commission plan depends on the payout probability for each contract. Contracts with higher returns for the client offer you lower commissions.')}</p>
                                            <Table
                                                data={{
                                                    thead: [
                                                        [
                                                            { text: it.L('Probability of returns') },
                                                            { text: it.L('Commission rates') },
                                                        ],
                                                    ],
                                                    tbody: [
                                                        [
                                                            { text: it.L('0 – 19.999%') },
                                                            { text: it.L('1.5%') },
                                                        ],
                                                        [
                                                            { text: it.L('20 – 39.999%') },
                                                            { text: it.L('1%') },
                                                        ],
                                                        [
                                                            { text: it.L('40 – 59.999%') },
                                                            { text: it.L('0.75%') },
                                                        ],
                                                        [
                                                            { text: it.L('60 – 79.999%') },
                                                            { text: it.L('0.5%') },
                                                        ],
                                                        [
                                                            { text: it.L('80 – 94.999%') },
                                                            { text: it.L('0.4%') },
                                                        ],
                                                        [
                                                            { text: it.L('95%+') },
                                                            { text: it.L('0%') },
                                                        ],
                                                    ],
                                                }}
                                            />
                                        </div>
                                        <a href={it.affiliate_signup_url} className='button' target='_blank' rel='noopener noreferrer'>
                                            <span>{it.L('Sign up now')}</span>
                                        </a>
                                    </TabContent>
                                    <TabContent id='cpa'>
                                        <div className='gr-11 gr-centered text-align-left'>
                                            <h3 className='no-margin'>{it.L('Cost per acquisition (CPA) for EU clients only')}</h3>
                                            <p>{it.L('Earn 100 USD in commission for each successful referral. Your referred client must open a [_1]real account[_2] through your unique affiliate link and deposit a total of 100 USD or more (one-time or accumulative) in the account. This commission plan is only available for clients based in the EU.', '<strong>', '</strong>')}</p>
                                            <a href={it.affiliate_signup_url} className='button center-text gr-centered gr-padding-20' target='_blank' rel='noopener noreferrer'>
                                                <span>{it.L('Sign up now')}</span>
                                            </a>
                                        </div>
                                    </TabContent>
                                </TabContentContainer>
                            </div>
                        </TabContainer>
                    </div>
                </div>
                <div id='ib'>
                    <div className='gr-12 gr-padding-20 white-bg-color'>
                        <p className='no-margin'>{it.L('Earn daily commissions on the trading activities of the clients you refer to the [_1] MetaTrader 5 (MT5) platform. Your total commissions will be credited into your account by the end of the day.', it.website_name)}</p>

                        <div className='gr-10 gr-12-m gr-parent gr-centered'>
                            <h3 id='ib_header' className='secondary-color'>{it.L('Commision structure')}</h3>

                            <h3>{it.L('Synthetic Account')}</h3>
                            <Table
                                data={{
                                    thead: [
                                        [
                                            { text: it.L('Asset'), attributes: { rowSpan: 2 } },
                                            { text: it.L('Commission per round trade') },
                                        ],
                                        [
                                            { text: it.L('$ per 100,000 USD of turnover'), className: 'center-text' },
                                        ],
                                    ],
                                    tbody: [
                                        [
                                            { text: it.L('Crash 1000 Index') },
                                            { text: it.L('0.50') },
                                        ],
                                        [
                                            { text: it.L('Crash 500 Index') },
                                            { text: it.L('0.70') },
                                        ],
                                        [
                                            { text: it.L('Boom 1000 Index') },
                                            { text: it.L('0.50') },
                                        ],
                                        [
                                            { text: it.L('Boom 500 Index') },
                                            { text: it.L('0.70') },
                                        ],
                                        [
                                            { text: it.L('Step Index') },
                                            { text: it.L('0.20') },
                                        ],
                                        [
                                            { text: it.L('Volatility 10 Index') },
                                            { text: it.L('1.50') },
                                        ],
                                        [
                                            { text: it.L('Volatility 10 (1s) Index') },
                                            { text: it.L('1.50') },
                                        ],
                                        [
                                            { text: it.L('Volatility 25 Index') },
                                            { text: it.L('3.50') },
                                        ],
                                        [
                                            { text: it.L('Volatility 25 (1s) Index') },
                                            { text: it.L('3.50') },
                                        ],
                                        [
                                            { text: it.L('Volatility 50 Index') },
                                            { text: it.L('7.50') },
                                        ],
                                        [
                                            { text: it.L('Volatility 50 (1s) Index') },
                                            { text: it.L('7.50') },
                                        ],
                                        [
                                            { text: it.L('Volatility 75 Index') },
                                            { text: it.L('10.00') },
                                        ],
                                        [
                                            { text: it.L('Volatility 75 (1s) Index') },
                                            { text: it.L('10.00') },
                                        ],
                                        [
                                            { text: it.L('Volatility 100 Index') },
                                            { text: it.L('15.00') },
                                        ],
                                        [
                                            { text: it.L('Volatility 100 (1s) Index') },
                                            { text: it.L('15.00') },
                                        ],
                                    ],
                                }}
                            />

                            <p className='text-align-left'>{it.L('For example, a round trade (i.e. open and close position) of 1 lot of Vol 75 Index for a price of 125,000 USD would pay 12.5 USD.')}</p>
                            <p className='text-align-left'><strong>{it.L('10 USD x 1 lot x 125,000 USD/100,000 = 12.5 USD')}</strong></p>
                            <p className='text-align-left'>{it.L('If your account currency is EUR or GBP, your commission will be converted based on the current forex rate.')}</p>

                            <h3>{it.L('Financial account')}</h3>
                            <Table
                                data={{
                                    thead: [
                                        [
                                            { text: it.L('Asset'), attributes: { rowSpan: 2 } },
                                            { text: it.L('Commission') },
                                        ],
                                        [
                                            { text: it.L('per lot'), className: 'center-text' },
                                        ],
                                    ],
                                    tbody: [
                                        [
                                            { text: it.L('Forex and metals*') },
                                            { text: it.L('10') },
                                        ],
                                    ],
                                }}
                            />
                            <Table
                                data={{
                                    thead: [
                                        [
                                            { text: it.L('Asset'), attributes: { rowSpan: 2 } },
                                            { text: it.L('Commission per round trade') },
                                        ],
                                        [
                                            { text: it.L('$ per 100,000 USD of turnover'), className: 'center-text' },
                                        ],
                                    ],
                                    tbody: [
                                        [
                                            { text: it.L('BTC/USD') },
                                            { text: it.L('40') },
                                        ],
                                        [
                                            { text: it.L('ETH/USD') },
                                            { text: it.L('40') },
                                        ],
                                        [
                                            { text: it.L('LTC/USD') },
                                            { text: it.L('50') },
                                        ],
                                        [
                                            { text: it.L('BCH/USD') },
                                            { text: it.L('50') },
                                        ],
                                        [
                                            { text: it.L('XRP/USD') },
                                            { text: it.L('50') },
                                        ],
                                        [
                                            { text: it.L('DSH/USD') },
                                            { text: it.L('500') },
                                        ],
                                        [
                                            { text: it.L('EOS/USD') },
                                            { text: it.L('500') },
                                        ],
                                        [
                                            { text: it.L('ZEC/USD') },
                                            { text: it.L('500') },
                                        ],
                                        [
                                            { text: it.L('XMR/USD') },
                                            { text: it.L('500') },
                                        ],
                                        [
                                            { text: it.L('BNB/USD') },
                                            { text: it.L('50') },
                                        ],
                                    ],
                                }}
                            />

                            <h3>{it.L('Financial STP account')}</h3>
                            <Table
                                data={{
                                    thead: [
                                        [
                                            { text: it.L('Asset'), attributes: { rowSpan: 2 } },
                                            { text: it.L('Commission') },
                                        ],
                                        [
                                            { text: it.L('per lot'), className: 'center-text' },
                                        ],
                                    ],
                                    tbody: [
                                        [
                                            { text: it.L('Forex*') },
                                            { text: it.L('5') },
                                        ],
                                    ],
                                }}
                            />
                            <Table
                                data={{
                                    thead: [
                                        [
                                            { text: it.L('Asset'), attributes: { rowSpan: 2 } },
                                            { text: it.L('Commission per round trade') },
                                        ],
                                        [
                                            { text: it.L('$ per 100,000 USD of turnover'), className: 'center-text' },
                                        ],
                                    ],
                                    tbody: [
                                        [
                                            { text: it.L('BTC/USD') },
                                            { text: it.L('40') },
                                        ],
                                        [
                                            { text: it.L('ETH/USD') },
                                            { text: it.L('40') },
                                        ],
                                        [
                                            { text: it.L('LTC/USD') },
                                            { text: it.L('50') },
                                        ],
                                        [
                                            { text: it.L('BCH/USD') },
                                            { text: it.L('50') },
                                        ],
                                        [
                                            { text: it.L('XRP/USD') },
                                            { text: it.L('50') },
                                        ],
                                        [
                                            { text: it.L('DSH/USD') },
                                            { text: it.L('500') },
                                        ],
                                        [
                                            { text: it.L('EOS/USD') },
                                            { text: it.L('500') },
                                        ],
                                        [
                                            { text: it.L('ZEC/USD') },
                                            { text: it.L('500') },
                                        ],
                                        [
                                            { text: it.L('XMR/USD') },
                                            { text: it.L('500') },
                                        ],
                                        [
                                            { text: it.L('BNB/USD') },
                                            { text: it.L('50') },
                                        ],
                                    ],
                                }}
                            />

                            <p className='text-align-left'>*{it.L('Represents the amount in base currency per round trade. For example, a round trade of 1 lot of EUR/USD would pay 10 EUR on financial accounts. A round trade of 1 lot of USD/CAD would pay 5 USD on financial STP accounts.')}</p>
                        </div>

                        <a href={it.affiliate_signup_url} className='button' target='_blank' rel='noopener noreferrer'>
                            <span>{it.L('Sign up now')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default TypesOfPartnership;
