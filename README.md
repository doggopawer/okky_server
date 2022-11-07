# OKKY 서버 요구사항

### 공통
- [ ] GET /common/writing-tag/rank
- [x] GET /common/big-menu/gnb
- [ ] GET /common/model/rank
- [x] GET /common/member/profile

### 회원가입 페이지
- [x] POST /account/member/sign-up
- [ ] POST /account/member/already-exist

### 로그인 페이지
- [x] POST /account/member/sign-in

### 비밀번호 찾기 페이지
- [ ] PUT /account/member/find-account

### 메인 페이지
- [x] GET /main/writing/list
### 갤러리 페이지
- [x] GET /gallery/writing/list
- [x] GET /gallery/small-menu/lnb
- [ ] GET /gallery/writing/page

### 아티클 페이지
- [ ] GET /article/writing/item
- [ ] GET /article/big-comment/list
- [ ] GET /article/small-comment/list
- [ ] GET /article/writing-tag/list
- [ ] GET /article/writing-like/amount
- [ ] GET /article/big-comment-like/amount
- [ ] GET /article/small-comment-like/amount
- [ ] POST /article/big-comment/item
- [ ] POST /article/small-comment/item
- [ ] POST /article/writing-like/item
- [ ] POST /article/big-comment-like/item
- [ ] POST /article/small-comment-like/item
- [ ] DELETE /article/writing/item
- [ ] DELETE /article/big-comment/item
- [ ] DELETE /article/small-comment/item
- [ ] DELETE /article/writing-like/item
- [ ] DELETE /article/big-comment-like/item
- [ ] DELETE /article/small-comment-like/item
- [ ] PUT /article/big-comment/adopt
### 아티클 생성 페이지
- [ ] POST /article/writing/item
- [ ] POST /article/writing-tag/item
- [ ] DELETE /article/writing-tag/item
### 아티클 수정 페이지
- [ ] PUT /article/writing/item

### 개인 정보 페이지
- [ ] GET /info/model/item
- [ ] GET /info/model-tag/list
- [ ] POST /info/model-tag/item
- [ ] PUT /info/model/item

### 활동 페이지
- [ ] GET /activity/writing/list
- [ ] GET /activity/big-comment/list
- [ ] GET /activity/small-comment/list
- [ ] GET /activity/writing-like/list
- [ ] GET /activity/big-comment-like/list
- [ ] GET /activity/small-comment-like/list
- [ ] GET /activity/scrap/list
- [ ] GET /activity/all/page
 