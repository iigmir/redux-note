import React from "react";

class IntroArticle extends React.Component {
    render()
    {
        return (
        <article>
            <h1> Hello Redux </h1>
            <p>雖然說 Vue 的 vuex 是借鑿 Redux 的；雖然這兩個都是 flux 架構過來的中央管理系統，但這兩個的實做起來卻差很多。直接跳過來的話，會很困惑。</p>
            <p>首先，在 vuex 裡面，你會直接在 mutations 修改 state 的樣子；但在 Redux 裡面，你必須在 dispatcher function 裡面，提供新的 state 給 Redux，讓他自己用你給的數值，來修改 state。</p>
            <p>再來，在 Redux 裡面，一個 React app 只能有一個 store。這個 store 必須要在包在 Provider 裡面。</p>
            <p>再說說模塊吧：Redux 的每個模塊，是以一個 dispatcher 為單位的，而 state 看起來，似乎只是 dispatcher 的附屬變數。但在 vuex 裡面，從 state 到 mutation 的每一個階段，都是獨立的物件。所以開發的時候，我常常會難以理解。所以如果只有一個 store 但你想要把 state 分門別類的話怎麼辦呢？答案是建立一個 dispatcher 然後把 state 弄起來！</p>
            <p>最後，你必須在輸出 component 時，透過 react-redux 內建的 connect function 把 state, action, component 這三個連結在一起。而不是像 vuex 那樣，一開始就引入 mapAction, mapMutation 之類的。</p>
        </article>
        );
    }
}

export default IntroArticle;
