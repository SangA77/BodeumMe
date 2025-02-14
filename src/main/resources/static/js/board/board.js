$(document).ready(function () {
    for (let i = 0; i < 36; i++) {
        $("#boarder").append(`
            <article class="board-article">
                <a href="/gig/426333" class="board-link">
                    <div class="board-img">
                        <div class="img-box">
                            <div class="img-wrapper">
                                <div tabindex="0" class="img-area">
                                    <img title="단순 업무관리 서비스"
                                        alt="단순 업무관리 서비스"
                                        src="https://d2v80xjmx68n4w.cloudfront.net/gigs/O2fKH1670643099.png"
                                        loading="lazy"
                                        class="title-img">
                                </div>
                            </div>
                        </div>
                        
                        
    <!--                    ${heart_button()}               -->
    
    
    
                    </div>
                    
                    <div class="board-field">
                        <div class="board-field-task-area">
                            <span class="task">PAGE10</span>
                        </div>
                        <h3 class="board-field-title">단순 업무관리 서비스</h3>
                        <div class="wage-wrapper">
                            <div class="space-area"></div>
                            <div class="wage-area">
                                <img
                                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/img_desktop_company.png"
                                    alt="세금계산서 발행" title="세금계산서 발행" class="wage-img">
                                <div class="wage">50,000원~</div>
                            </div>
                        </div>
                        <div class="evaluation-area">
                        
                        
                            ${star_input(0)}
                            
                            
                            0.0<span class="star-count"></span>
                            <div class="evaluation-count">0개의 평가</div>
                        </div>
                    </div>
                </a>
            </article>
        `)
    }
})

/**
 *
 * */
function star_input(star_kinds){
    if(star_kinds === 1){
        return `<span role="img" rotate="0" class="star-color"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" class="star-svg"><path d="M8.37094152,8.12482574 L2.52598096,8.59636398 L2.36821881,8.6135218 C0.881583763,8.81867772 0.513822851,10.1467426 1.72605142,11.1443161 L6.11068071,14.7526934 L4.80553251,20.0682859 L4.77348322,20.2161997 C4.50052597,21.673724 5.6402616,22.4726949 6.9887771,21.699537 L12.00271,18.8250573 L17.0166429,21.699537 L17.1506515,21.7715841 C18.4829447,22.4403279 19.5680516,21.5674348 19.1998875,20.0682859 L17.8937294,14.7526934 L22.2793686,11.1443161 L22.3984321,11.0405714 C23.4954951,10.0270601 23.0352205,8.72174778 21.479439,8.59636398 L15.6334685,8.12482574 L13.3880977,3.09014615 C12.7393731,1.6361626 11.2656405,1.63707337 10.6173223,3.09014615 L8.37094152,8.12482574 Z"></path></svg></span>`
    }
    else{
        return `<span role="img" rotate="0" 
                            class="star"><!-- class에 평점 있으면 star-color로 바뀌어야함 -->
                            <svg
                                width="12" height="12" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet"
                                class="star-svg">
                                <path
                                    d="M8.37094152,8.12482574 L2.52598096,8.59636398 L2.36821881,8.6135218 C0.881583763,8.81867772 0.513822851,10.1467426 1.72605142,11.1443161 L6.11068071,14.7526934 L4.80553251,20.0682859 L4.77348322,20.2161997 C4.50052597,21.673724 5.6402616,22.4726949 6.9887771,21.699537 L12.00271,18.8250573 L17.0166429,21.699537 L17.1506515,21.7715841 C18.4829447,22.4403279 19.5680516,21.5674348 19.1998875,20.0682859 L17.8937294,14.7526934 L22.2793686,11.1443161 L22.3984321,11.0405714 C23.4954951,10.0270601 23.0352205,8.72174778 21.479439,8.59636398 L15.6334685,8.12482574 L13.3880977,3.09014615 C12.7393731,1.6361626 11.2656405,1.63707337 10.6173223,3.09014615 L8.37094152,8.12482574 Z"></path>
                            </svg>
                        </span>`
    }
}




/**
 * 이미지 내의 하트 버튼
 * */
function heart_button(){
    return `
                       <div class="heart-button-wrapper">
                        <button class="heart-button">
                            <span role="img" color="#ffffff" rotate="0"
                                class="heart">
                                 <svg
                                    width="26" height="26" viewBox="0 0 24 24" fill="currentColor"
                                    aria-hidden="true" focusable="false"
                                    preserveAspectRatio="xMidYMid meet"
                                    class="heart-svg">
                                        <defs>
                                            <path
                                                d="M16.3680447,3 C14.8701244,3 13.434867,3.60809471 12.3788995,4.68835248 L11.999764,5.07602721 L11.6205012,4.68822239 C9.41974855,2.43790277 5.843218,2.4379028 3.64246538,4.68822244 C1.45251156,6.92750008 1.45251154,10.5501072 3.64246532,12.7893849 L11.4435969,20.7662195 C11.7484384,21.0779268 12.2510896,21.0779268 12.555931,20.7662195 L20.3570626,12.7893849 C21.4096395,11.7136062 22,10.2567327 22,8.73880364 C22,7.22093571 21.409687,5.76411845 20.3570626,4.68822238 C19.3011071,3.60804588 17.8659048,3 16.3680447,3 Z M11.999764,19.1166999 L4.75479942,11.7085588 C3.15293092,10.0706117 3.15293094,7.4069956 4.75479947,5.76904857 C6.34586921,4.14214354 8.91709737,4.14214352 10.5081671,5.76904852 L11.4435969,6.72554678 C11.7484384,7.0372541 12.2510896,7.0372541 12.555931,6.72554678 L13.4913608,5.76904851 C14.2561214,4.98669624 15.2906419,4.5483871 16.3680447,4.5483871 C17.4454474,4.5483871 18.4799679,4.98669624 19.2446013,5.76891842 C20.0136074,6.55487573 20.4466019,7.6234063 20.4466019,8.73880364 C20.4466019,9.85420097 20.0136074,10.9227315 19.2448557,11.7084287 L18.3092987,12.665057 L11.999764,19.1166999 Z"
                                                id="heart-outlined-fill-icon">

                                            </path>
                                        </defs>
                                        <g
                                            id="Icons_Favorite_border_fill" 
                                            stroke="none" 
                                            stroke-width="1"
                                            fill-rule="evenodd">
                                            <path
                                                d="M16.3680447,3 C14.8701244,3 13.434867,3.60809471 12.3788995,4.68835248 L11.999764,5.07602721 L11.6205012,4.68822239 C9.41974855,2.43790277 5.843218,2.4379028 3.64246538,4.68822244 C1.45251156,6.92750008 1.45251154,10.5501072 3.64246532,12.7893849 L11.4435969,20.7662195 C11.7484384,21.0779268 12.2510896,21.0779268 12.555931,20.7662195 L20.3570626,12.7893849 C21.4096395,11.7136062 22,10.2567327 22,8.73880364 C22,7.22093571 21.409687,5.76411845 20.3570626,4.68822238 C19.3011071,3.60804588 17.8659048,3 16.3680447,3 Z"
                                                id="Shape" 
                                                fill="#212224" 
                                                fill-rule="nonzero" 
                                                opacity="0.2">

                                            </path>
                                            <mask
                                                id="mask-2" 
                                                fill="white">
                                                <use xlink:href="#heart-outlined-fill-icon"></use>
                                            </mask>
                                            <use
                                                id="Shape" xlink:href="#heart-outlined-fill-icon"></use>
                                        </g>
                                 </svg>
                            </span>
                        </button>
                    </div>
    
    `
}