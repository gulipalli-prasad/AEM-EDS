// export default function decorate(block) {
//     const [
//         imageEl,
//       popupHeadingEl,
//       popupDescEl,
//       linkEl,
//       yesEl,
//       noEl,
//       userImageEl,
//       userimagealttxtEl,
//     ] = block.children;

//     const logoutText = logoutTextEl?.textContent?.trim() || '';
//     const popupHeading = popupHeadingEl?.textContent?.trim() || '';
//     const popupDesc = popupDescEl?.textContent?.trim() || '';
//     const link = linkEl?.querySelector('a')?.href || '#';
//     const yesText = yesEl?.textContent?.trim() || '';
//     const noText = noEl?.textContent?.trim() || '';
//     const userImageElement = userImageEl.querySelector('img');
//     const userImage = userImageElement?.getAttribute('src')?.trim() || '';
//     const userimagealttxt = userimagealttxtEl?.textContent?.trim() || '';

//     function createProfileCard() {
//       return `

//                     <div class="user-img">
//                         <img src="${userImage}" alt="${userimagealttxt}">
//                     </div>
//                     <div class="user-details">
//                         <div class="user_bx">
//                             <h4 class="user_name" id="user_name">LALIT TUKARAM ZIRMIRE</h4>
//                             <p class="user_designation" id="user_designation">Relationship Manager</p>
//                             <p class="user_addr" id="user_addr">411037, PUNE MAHARASHTRA</p>
//                         </div>
//                         <div class="user_logout">
//                             <a href="javascript:void(0)" id="logoutButton">${logoutText}</a>
//                         </div>
//                     </div>
//       `;
//     }

//   }
