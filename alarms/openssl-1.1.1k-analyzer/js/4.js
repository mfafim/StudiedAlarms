var data = {"bug_cases": {"BugType": "NULL pointer dereference", "Severity": 12, "CaseList": [{"HashID": "eed4d960cc477bb3bcc52ffc1efce963", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f0a5b433c9ee5f470b0f3d2915a4870e.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 237, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 232}, {"FileMD5": "2b67978c4ae15cf61d2409d87b705597.c", "FileName": "crypto/ec/ec2_smpl.c", "Line": 622, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>x</b> (<b>x</b> can be null)", "SrcLines": ["        if (ctx == NULL)", "            return 0;", "    }", "", "    BN_CTX_start(ctx);", "    x = BN_CTX_get(ctx);", "    y = BN_CTX_get(ctx);", "    if (y == NULL)", "        goto err;", ""], "SrcStart": 617}, {"FileMD5": "2b67978c4ae15cf61d2409d87b705597.c", "FileName": "crypto/ec/ec2_smpl.c", "Line": 629, "Tip": "<b>x</b> is used as the 2nd parameter in function <b>BN_copy</b> (<b>x</b> can be null)", "SrcLines": ["    if (y == NULL)", "        goto err;", "", "    if (!EC_POINT_get_affine_coordinates(group, point, x, y, ctx))", "        goto err;", "    if (!BN_copy(point->X, x))", "        goto err;", "    if (!BN_copy(point->Y, y))", "        goto err;", "    if (!BN_one(point->Z))"], "SrcStart": 624}, {"FileMD5": "bb6786814fe080818367893943932b6a.c", "FileName": "crypto/bn/bn_lib.c", "Line": 341, "Tip": "<b>b</b> is used as the 1st parameter in function <b>BN_get_flags</b> (<b>b</b> can be null)", "SrcLines": ["{", "    int bn_words;", "", "    bn_check_top(b);", "", "    bn_words = BN_get_flags(b, BN_FLG_CONSTTIME) ? b->dmax : b->top;", "", "    if (a == b)", "        return a;", "    if (bn_wexpand(a, bn_words) == NULL)"], "SrcStart": 336}, {"FileMD5": "bb6786814fe080818367893943932b6a.c", "FileName": "crypto/bn/bn_lib.c", "Line": 971, "Tip": "Load value from <b>b-&gt;flags</b>", "SrcLines": ["    b->flags |= n;", "}", "", "int BN_get_flags(const BIGNUM *b, int n)", "{", "    return b->flags & n;", "}", "", "/* Populate a BN_GENCB structure with an \"old\"-style callback */", "void BN_GENCB_set_old(BN_GENCB *gencb, void (*callback) (int, int, void *),"], "SrcStart": 966}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/bn/bn_lib.c", "Line": 971}, {"HashID": "a0dbd81f0ed2d351bac61876351a0ab2", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f0a5b433c9ee5f470b0f3d2915a4870e.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 237, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 232}, {"FileMD5": "2b67978c4ae15cf61d2409d87b705597.c", "FileName": "crypto/ec/ec2_smpl.c", "Line": 793, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>t1</b> (<b>t1</b> can be null)", "SrcLines": ["        return 1;", "    }", "", "    BN_CTX_start(ctx);", "    t0 = BN_CTX_get(ctx);", "    t1 = BN_CTX_get(ctx);", "    t2 = BN_CTX_get(ctx);", "    if (t2 == NULL) {", "        ECerr(EC_F_EC_GF2M_SIMPLE_LADDER_POST, ERR_R_MALLOC_FAILURE);", "        goto err;"], "SrcStart": 788}, {"FileMD5": "2b67978c4ae15cf61d2409d87b705597.c", "FileName": "crypto/ec/ec2_smpl.c", "Line": 802, "Tip": "<b>t1</b> is used as the 1st parameter in function <b>BN_GF2m_add</b> (<b>t1</b> can be null)", "SrcLines": ["        goto err;", "    }", "", "    if (!group->meth->field_mul(group, t0, r->Z, s->Z, ctx)", "        || !group->meth->field_mul(group, t1, p->X, r->Z, ctx)", "        || !BN_GF2m_add(t1, r->X, t1)", "        || !group->meth->field_mul(group, t2, p->X, s->Z, ctx)", "        || !group->meth->field_mul(group, r->Z, r->X, t2, ctx)", "        || !BN_GF2m_add(t2, t2, s->X)", "        || !group->meth->field_mul(group, t1, t1, t2, ctx)"], "SrcStart": 797}, {"FileMD5": "af984bb8d1d060a64505a6af0f13709d.c", "FileName": "crypto/bn/bn_gf2m.c", "Line": 268, "Tip": "<b>r</b> is used as the 1st parameter in function <b>bn_wexpand</b> (<b>r</b> can be null)", "SrcLines": ["    } else {", "        at = a;", "        bt = b;", "    }", "", "    if (bn_wexpand(r, at->top) == NULL)", "        return 0;", "", "    for (i = 0; i < bt->top; i++) {", "        r->d[i] = at->d[i] ^ bt->d[i];"], "SrcStart": 263}, {"FileMD5": "bb6786814fe080818367893943932b6a.c", "FileName": "crypto/bn/bn_lib.c", "Line": 1001, "Tip": "Load value from <b>a-&gt;dmax</b>", "SrcLines": ["    return cb->arg;", "}", "", "BIGNUM *bn_wexpand(BIGNUM *a, int words)", "{", "    return (words <= a->dmax) ? a : bn_expand2(a, words);", "}", "", "void bn_correct_top(BIGNUM *a)", "{"], "SrcStart": 996}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/bn/bn_lib.c", "Line": 1001}, {"HashID": "bb28b2391cae2fd508383f2209a0b04f", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f0a5b433c9ee5f470b0f3d2915a4870e.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 237, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 232}, {"FileMD5": "fdbf45d391d4c36e652033e1b961ca25.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 520, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>Z_2</b> (<b>Z_2</b> can be null)", "SrcLines": ["    }", "", "    BN_CTX_start(ctx);", "    Z = BN_CTX_get(ctx);", "    Z_1 = BN_CTX_get(ctx);", "    Z_2 = BN_CTX_get(ctx);", "    Z_3 = BN_CTX_get(ctx);", "    if (Z_3 == NULL)", "        goto err;", ""], "SrcStart": 515}, {"FileMD5": "fdbf45d391d4c36e652033e1b961ca25.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 567, "Tip": "<b>Z_2</b> is used as the 1st parameter in function <b>BN_mod_sqr</b> (<b>Z_2</b> can be null)", "SrcLines": ["        if (group->meth->field_encode == 0) {", "            /* field_sqr works on standard representation */", "            if (!group->meth->field_sqr(group, Z_2, Z_1, ctx))", "                goto err;", "        } else {", "            if (!BN_mod_sqr(Z_2, Z_1, group->field, ctx))", "                goto err;", "        }", "", "        if (x != NULL) {"], "SrcStart": 562}, {"FileMD5": "df6e93be077ef86ba887ba753cc40d4b.c", "FileName": "crypto/bn/bn_mod.c", "Line": 224, "Tip": "<b>r</b> is used as the 1st parameter in function <b>BN_sqr</b> (<b>r</b> can be null)", "SrcLines": ["    return ret;", "}", "", "int BN_mod_sqr(BIGNUM *r, const BIGNUM *a, const BIGNUM *m, BN_CTX *ctx)", "{", "    if (!BN_sqr(r, a, ctx))", "        return 0;", "    /* r->neg == 0,  thus we don't need BN_nnmod */", "    return BN_mod(r, r, m, ctx);", "}"], "SrcStart": 219}, {"FileMD5": "ff6e26f495186b654c2f9ee38cae1b27.c", "FileName": "crypto/bn/bn_sqr.c", "Line": 21, "Tip": "<b>r</b> is used as the 1st parameter in function <b>bn_correct_top</b> (<b>r</b> can be null)", "SrcLines": [" */", "int BN_sqr(BIGNUM *r, const BIGNUM *a, BN_CTX *ctx)", "{", "    int ret = bn_sqr_fixed_top(r, a, ctx);", "", "    bn_correct_top(r);", "    bn_check_top(r);", "", "    return ret;", "}"], "SrcStart": 16}, {"FileMD5": "bb6786814fe080818367893943932b6a.c", "FileName": "crypto/bn/bn_lib.c", "Line": 1007, "Tip": "Load value from <b>a-&gt;top</b> and assign to <b>tmp_top</b>", "SrcLines": ["}", "", "void bn_correct_top(BIGNUM *a)", "{", "    BN_ULONG *ftl;", "    int tmp_top = a->top;", "", "    if (tmp_top > 0) {", "        for (ftl = &(a->d[tmp_top]); tmp_top > 0; tmp_top--) {", "            ftl--;"], "SrcStart": 1002}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/bn/bn_lib.c", "Line": 1007}, {"HashID": "a3952afe986edc99882385bffdd09968", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f0a5b433c9ee5f470b0f3d2915a4870e.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 237, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 232}, {"FileMD5": "2249fc616b510df61903f2f41fd57f41.c", "FileName": "crypto/dh/dh_gen.c", "Line": 72, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>t1</b> (<b>t1</b> can be null)", "SrcLines": ["", "    ctx = BN_CTX_new();", "    if (ctx == NULL)", "        goto err;", "    BN_CTX_start(ctx);", "    t1 = BN_CTX_get(ctx);", "    t2 = BN_CTX_get(ctx);", "    if (t2 == NULL)", "        goto err;", ""], "SrcStart": 67}, {"FileMD5": "2249fc616b510df61903f2f41fd57f41.c", "FileName": "crypto/dh/dh_gen.c", "Line": 105, "Tip": "<b>t1</b> is used as the 1st parameter in function <b>BN_set_word</b> (<b>t1</b> can be null)", "SrcLines": ["        /*", "         * in the general case, don't worry if 'generator' is a generator or", "         * not: since we are using safe primes, it will generate either an", "         * order-q or an order-2q group, which both is OK", "         */", "        if (!BN_set_word(t1, 12))", "            goto err;", "        if (!BN_set_word(t2, 11))", "            goto err;", "        g = generator;"], "SrcStart": 100}, {"FileMD5": "bb6786814fe080818367893943932b6a.c", "FileName": "crypto/bn/bn_lib.c", "Line": 422, "Tip": "<b>a</b> is used as the 1st parameter in function <b>bn_expand</b> (<b>a</b> can be null)", "SrcLines": ["}", "", "int BN_set_word(BIGNUM *a, BN_ULONG w)", "{", "    bn_check_top(a);", "    if (bn_expand(a, (int)sizeof(BN_ULONG) * 8) == NULL)", "        return 0;", "    a->neg = 0;", "    a->d[0] = w;", "    a->top = (w ? 1 : 0);"], "SrcStart": 417}, {"FileMD5": "a834a3a7041ea9108e8737be9d2029ca.h", "FileName": "crypto/bn/bn_local.h", "Line": 662, "Tip": "Load value from <b>a-&gt;dmax</b>", "SrcLines": ["static ossl_inline BIGNUM *bn_expand(BIGNUM *a, int bits)", "{", "    if (bits > (INT_MAX - BN_BITS2 + 1))", "        return NULL;", "", "    if (((bits+BN_BITS2-1)/BN_BITS2) <= (a)->dmax)", "        return a;", "", "    return bn_expand2((a),(bits+BN_BITS2-1)/BN_BITS2);", "}"], "SrcStart": 657}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/bn/bn_local.h", "Line": 662}, {"HashID": "d22c0dfc3b3271bed5bed2b6478b8fca", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f0a5b433c9ee5f470b0f3d2915a4870e.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 237, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 232}, {"FileMD5": "01d1693cc4dfede7651fe31a77a340d5.c", "FileName": "crypto/bn/bn_sqrt.c", "Line": 60, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>A</b> (<b>A</b> can be null)", "SrcLines": ["        bn_check_top(ret);", "        return ret;", "    }", "", "    BN_CTX_start(ctx);", "    A = BN_CTX_get(ctx);", "    b = BN_CTX_get(ctx);", "    q = BN_CTX_get(ctx);", "    t = BN_CTX_get(ctx);", "    x = BN_CTX_get(ctx);"], "SrcStart": 55}, {"FileMD5": "01d1693cc4dfede7651fe31a77a340d5.c", "FileName": "crypto/bn/bn_sqrt.c", "Line": 75, "Tip": "<b>A</b> is used as the 1st parameter in function <b>BN_nnmod</b> (<b>A</b> can be null)", "SrcLines": ["        ret = BN_new();", "    if (ret == NULL)", "        goto end;", "", "    /* A = a mod p */", "    if (!BN_nnmod(A, a, p, ctx))", "        goto end;", "", "    /* now write  |p| - 1  as  2^e*q  where  q  is odd */", "    e = 1;"], "SrcStart": 70}, {"FileMD5": "df6e93be077ef86ba887ba753cc40d4b.c", "FileName": "crypto/bn/bn_mod.c", "Line": 22, "Tip": "Load value from <b>r-&gt;neg</b>", "SrcLines": ["     * always holds)", "     */", "", "    if (!(BN_mod(r, m, d, ctx)))", "        return 0;", "    if (!r->neg)", "        return 1;", "    /* now   -|d| < r < 0,  so we have to set  r := r + |d| */", "    return (d->neg ? BN_sub : BN_add) (r, r, d);", "}"], "SrcStart": 17}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/bn/bn_mod.c", "Line": 22}, {"HashID": "47dfa536ccda2fc53dd026147f150b29", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f0a5b433c9ee5f470b0f3d2915a4870e.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 237, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 232}, {"FileMD5": "fdbf45d391d4c36e652033e1b961ca25.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 822, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>n0</b> (<b>n0</b> can be null)", "SrcLines": ["        if (ctx == NULL)", "            return 0;", "    }", "", "    BN_CTX_start(ctx);", "    n0 = BN_CTX_get(ctx);", "    n1 = BN_CTX_get(ctx);", "    n2 = BN_CTX_get(ctx);", "    n3 = BN_CTX_get(ctx);", "    if (n3 == NULL)"], "SrcStart": 817}, {"FileMD5": "fdbf45d391d4c36e652033e1b961ca25.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 866, "Tip": "<b>n0</b> is used as the 2nd parameter in function <b>BN_mod_lshift1_quick</b> (<b>n0</b> can be null)", "SrcLines": ["         *    = 3 * X_a^2 - 3 * Z_a^4", "         */", "    } else {", "        if (!field_sqr(group, n0, a->X, ctx))", "            goto err;", "        if (!BN_mod_lshift1_quick(n1, n0, p))", "            goto err;", "        if (!BN_mod_add_quick(n0, n0, n1, p))", "            goto err;", "        if (!field_sqr(group, n1, a->Z, ctx))"], "SrcStart": 861}, {"FileMD5": "df6e93be077ef86ba887ba753cc40d4b.c", "FileName": "crypto/bn/bn_mod.c", "Line": 244, "Tip": "<b>a</b> is used as the 2nd parameter in function <b>BN_lshift1</b> (<b>a</b> can be null)", "SrcLines": [" * BN_mod_lshift1 variant that may be used if a is non-negative and less than", " * m", " */", "int BN_mod_lshift1_quick(BIGNUM *r, const BIGNUM *a, const BIGNUM *m)", "{", "    if (!BN_lshift1(r, a))", "        return 0;", "    bn_check_top(r);", "    if (BN_cmp(r, m) >= 0)", "        return BN_sub(r, r, m);"], "SrcStart": 239}, {"FileMD5": "0c0357da2c2fd5fdb992e485d80919f5.c", "FileName": "crypto/bn/bn_shift.c", "Line": 23, "Tip": "Load value from <b>a-&gt;neg</b>", "SrcLines": ["", "    bn_check_top(r);", "    bn_check_top(a);", "", "    if (r != a) {", "        r->neg = a->neg;", "        if (bn_wexpand(r, a->top + 1) == NULL)", "            return 0;", "        r->top = a->top;", "    } else {"], "SrcStart": 18}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/bn/bn_shift.c", "Line": 23}, {"HashID": "fa24c2e82270e8874b49350551a80a9e", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f0a5b433c9ee5f470b0f3d2915a4870e.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 237, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 232}, {"FileMD5": "01d1693cc4dfede7651fe31a77a340d5.c", "FileName": "crypto/bn/bn_sqrt.c", "Line": 60, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>A</b> (<b>A</b> can be null)", "SrcLines": ["        bn_check_top(ret);", "        return ret;", "    }", "", "    BN_CTX_start(ctx);", "    A = BN_CTX_get(ctx);", "    b = BN_CTX_get(ctx);", "    q = BN_CTX_get(ctx);", "    t = BN_CTX_get(ctx);", "    x = BN_CTX_get(ctx);"], "SrcStart": 55}, {"FileMD5": "01d1693cc4dfede7651fe31a77a340d5.c", "FileName": "crypto/bn/bn_sqrt.c", "Line": 134, "Tip": "<b>A</b> is used as the 2nd parameter in function <b>BN_mod_lshift1_quick</b> (<b>A</b> can be null)", "SrcLines": ["         * URL: https://listserv.nodak.edu/cgi-bin/wa.exe?A2=ind9211&L=NMBRTHRY&P=4026", "         * November 1992.)", "         */", "", "        /* t := 2*a */", "        if (!BN_mod_lshift1_quick(t, A, p))", "            goto end;", "", "        /* b := (2*a)^((|p|-5)/8) */", "        if (!BN_rshift(q, p, 3))"], "SrcStart": 129}, {"FileMD5": "df6e93be077ef86ba887ba753cc40d4b.c", "FileName": "crypto/bn/bn_mod.c", "Line": 244, "Tip": "<b>a</b> is used as the 2nd parameter in function <b>BN_lshift1</b> (<b>a</b> can be null)", "SrcLines": [" * BN_mod_lshift1 variant that may be used if a is non-negative and less than", " * m", " */", "int BN_mod_lshift1_quick(BIGNUM *r, const BIGNUM *a, const BIGNUM *m)", "{", "    if (!BN_lshift1(r, a))", "        return 0;", "    bn_check_top(r);", "    if (BN_cmp(r, m) >= 0)", "        return BN_sub(r, r, m);"], "SrcStart": 239}, {"FileMD5": "0c0357da2c2fd5fdb992e485d80919f5.c", "FileName": "crypto/bn/bn_shift.c", "Line": 28, "Tip": "Load value from <b>a-&gt;top</b>", "SrcLines": ["        r->neg = a->neg;", "        if (bn_wexpand(r, a->top + 1) == NULL)", "            return 0;", "        r->top = a->top;", "    } else {", "        if (bn_wexpand(r, a->top + 1) == NULL)", "            return 0;", "    }", "    ap = a->d;", "    rp = r->d;"], "SrcStart": 23}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/bn/bn_shift.c", "Line": 28}, {"HashID": "f87b2fe26825f93c5a6b69c96c59430e", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f0a5b433c9ee5f470b0f3d2915a4870e.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 237, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 232}, {"FileMD5": "fdbf45d391d4c36e652033e1b961ca25.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 520, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>Z_2</b> (<b>Z_2</b> can be null)", "SrcLines": ["    }", "", "    BN_CTX_start(ctx);", "    Z = BN_CTX_get(ctx);", "    Z_1 = BN_CTX_get(ctx);", "    Z_2 = BN_CTX_get(ctx);", "    Z_3 = BN_CTX_get(ctx);", "    if (Z_3 == NULL)", "        goto err;", ""], "SrcStart": 515}, {"FileMD5": "fdbf45d391d4c36e652033e1b961ca25.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 567, "Tip": "<b>Z_2</b> is used as the 1st parameter in function <b>BN_mod_sqr</b> (<b>Z_2</b> can be null)", "SrcLines": ["        if (group->meth->field_encode == 0) {", "            /* field_sqr works on standard representation */", "            if (!group->meth->field_sqr(group, Z_2, Z_1, ctx))", "                goto err;", "        } else {", "            if (!BN_mod_sqr(Z_2, Z_1, group->field, ctx))", "                goto err;", "        }", "", "        if (x != NULL) {"], "SrcStart": 562}, {"FileMD5": "df6e93be077ef86ba887ba753cc40d4b.c", "FileName": "crypto/bn/bn_mod.c", "Line": 224, "Tip": "<b>r</b> is used as the 1st parameter in function <b>BN_sqr</b> (<b>r</b> can be null)", "SrcLines": ["    return ret;", "}", "", "int BN_mod_sqr(BIGNUM *r, const BIGNUM *a, const BIGNUM *m, BN_CTX *ctx)", "{", "    if (!BN_sqr(r, a, ctx))", "        return 0;", "    /* r->neg == 0,  thus we don't need BN_nnmod */", "    return BN_mod(r, r, m, ctx);", "}"], "SrcStart": 219}, {"FileMD5": "ff6e26f495186b654c2f9ee38cae1b27.c", "FileName": "crypto/bn/bn_sqr.c", "Line": 19, "Tip": "<b>r</b> is used as the 1st parameter in function <b>bn_sqr_fixed_top</b> (<b>r</b> can be null)", "SrcLines": ["/*", " * I've just gone over this and it is now %20 faster on x86 - eay - 27 Jun 96", " */", "int BN_sqr(BIGNUM *r, const BIGNUM *a, BN_CTX *ctx)", "{", "    int ret = bn_sqr_fixed_top(r, a, ctx);", "", "    bn_correct_top(r);", "    bn_check_top(r);", ""], "SrcStart": 14}, {"FileMD5": "ff6e26f495186b654c2f9ee38cae1b27.c", "FileName": "crypto/bn/bn_sqr.c", "Line": 38, "Tip": "Store <b>0</b> to <b>r-&gt;neg</b>", "SrcLines": ["    bn_check_top(a);", "", "    al = a->top;", "    if (al <= 0) {", "        r->top = 0;", "        r->neg = 0;", "        return 1;", "    }", "", "    BN_CTX_start(ctx);"], "SrcStart": 33}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/bn/bn_sqr.c", "Line": 38}, {"HashID": "f8f01afb35b3e882c9a7d9f04dadee6b", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f2272d8c3c73e81d46873146c8a9a7e1.c", "FileName": "crypto/stack/stack.c", "Line": 390, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 385}, {"FileMD5": "66d30a6d1dbec516109dbd0b88e6a708.h", "FileName": "include/openssl/cms.h", "Line": 34, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["typedef struct CMS_Receipt_st CMS_Receipt;", "typedef struct CMS_RecipientEncryptedKey_st CMS_RecipientEncryptedKey;", "typedef struct CMS_OtherKeyAttribute_st CMS_OtherKeyAttribute;", "", "DEFINE_STACK_OF(CMS_SignerInfo)", "DEFINE_STACK_OF(CMS_RecipientEncryptedKey)", "DEFINE_STACK_OF(CMS_RecipientInfo)", "DEFINE_STACK_OF(CMS_RevocationInfoChoice)", "DECLARE_ASN1_FUNCTIONS(CMS_ContentInfo)", "DECLARE_ASN1_FUNCTIONS(CMS_ReceiptRequest)"], "SrcStart": 29}, {"FileMD5": "dc218efa176807ecf9559102c477f466.c", "FileName": "crypto/cms/cms_smime.c", "Line": 588, "Tip": "Function <b>sk_CMS_RecipientEncryptedKey_value</b> executes and stores the return value to <b>rek</b> (<b>rek</b> can be null)", "SrcLines": ["    STACK_OF(CMS_RecipientEncryptedKey) *reks;", "    CMS_RecipientEncryptedKey *rek;", "    reks = CMS_RecipientInfo_kari_get0_reks(ri);", "    for (i = 0; i < sk_CMS_RecipientEncryptedKey_num(reks); i++) {", "        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);"], "SrcStart": 583}, {"FileMD5": "dc218efa176807ecf9559102c477f466.c", "FileName": "crypto/cms/cms_smime.c", "Line": 589, "Tip": "<b>rek</b> is used as the 1st parameter in function <b>CMS_RecipientEncryptedKey_cert_cmp</b> (<b>rek</b> can be null)", "SrcLines": ["    CMS_RecipientEncryptedKey *rek;", "    reks = CMS_RecipientInfo_kari_get0_reks(ri);", "    for (i = 0; i < sk_CMS_RecipientEncryptedKey_num(reks); i++) {", "        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);", "        CMS_RecipientInfo_kari_set0_pkey(ri, NULL);"], "SrcStart": 584}, {"FileMD5": "db1c317a234be5e4fef5d667ae66513e.c", "FileName": "crypto/cms/cms_kari.c", "Line": 146, "Tip": "Load value from <b>rek-&gt;rid</b> and assign to <b>rid</b>", "SrcLines": ["}", "", "int CMS_RecipientEncryptedKey_cert_cmp(CMS_RecipientEncryptedKey *rek,", "                                       X509 *cert)", "{", "    CMS_KeyAgreeRecipientIdentifier *rid = rek->rid;", "    if (rid->type == CMS_REK_ISSUER_SERIAL)", "        return cms_ias_cert_cmp(rid->d.issuerAndSerialNumber, cert);", "    else if (rid->type == CMS_REK_KEYIDENTIFIER)", "        return cms_keyid_cert_cmp(rid->d.rKeyId->subjectKeyIdentifier, cert);"], "SrcStart": 141}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/cms/cms_kari.c", "Line": 146}, {"HashID": "702dd63124a7d64ed9b7d3685d78246e", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f2272d8c3c73e81d46873146c8a9a7e1.c", "FileName": "crypto/stack/stack.c", "Line": 390, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 385}, {"FileMD5": "66d30a6d1dbec516109dbd0b88e6a708.h", "FileName": "include/openssl/cms.h", "Line": 34, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["typedef struct CMS_Receipt_st CMS_Receipt;", "typedef struct CMS_RecipientEncryptedKey_st CMS_RecipientEncryptedKey;", "typedef struct CMS_OtherKeyAttribute_st CMS_OtherKeyAttribute;", "", "DEFINE_STACK_OF(CMS_SignerInfo)", "DEFINE_STACK_OF(CMS_RecipientEncryptedKey)", "DEFINE_STACK_OF(CMS_RecipientInfo)", "DEFINE_STACK_OF(CMS_RevocationInfoChoice)", "DECLARE_ASN1_FUNCTIONS(CMS_ContentInfo)", "DECLARE_ASN1_FUNCTIONS(CMS_ReceiptRequest)"], "SrcStart": 29}, {"FileMD5": "dc218efa176807ecf9559102c477f466.c", "FileName": "crypto/cms/cms_smime.c", "Line": 588, "Tip": "Function <b>sk_CMS_RecipientEncryptedKey_value</b> executes and stores the return value to <b>rek</b> (<b>rek</b> can be null)", "SrcLines": ["    STACK_OF(CMS_RecipientEncryptedKey) *reks;", "    CMS_RecipientEncryptedKey *rek;", "    reks = CMS_RecipientInfo_kari_get0_reks(ri);", "    for (i = 0; i < sk_CMS_RecipientEncryptedKey_num(reks); i++) {", "        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);"], "SrcStart": 583}, {"FileMD5": "dc218efa176807ecf9559102c477f466.c", "FileName": "crypto/cms/cms_smime.c", "Line": 589, "Tip": "Select the false branch at this point (<b>CMS_RecipientEncryptedKey_cert_cmp(rek,cert)!=0</b> is false)", "SrcLines": ["    CMS_RecipientEncryptedKey *rek;", "    reks = CMS_RecipientInfo_kari_get0_reks(ri);", "    for (i = 0; i < sk_CMS_RecipientEncryptedKey_num(reks); i++) {", "        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);", "        CMS_RecipientInfo_kari_set0_pkey(ri, NULL);"], "SrcStart": 584}, {"FileMD5": "dc218efa176807ecf9559102c477f466.c", "FileName": "crypto/cms/cms_smime.c", "Line": 592, "Tip": "<b>rek</b> is used as the 3rd parameter in function <b>CMS_RecipientInfo_kari_decrypt</b> (<b>rek</b> can be null)", "SrcLines": ["        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);", "        CMS_RecipientInfo_kari_set0_pkey(ri, NULL);", "        if (rv > 0)", "            return 1;", "        return cert == NULL ? 0 : -1;"], "SrcStart": 587}, {"FileMD5": "db1c317a234be5e4fef5d667ae66513e.c", "FileName": "crypto/cms/cms_kari.c", "Line": 237, "Tip": "Load value from <b>rek-&gt;encryptedKey</b>", "SrcLines": ["    int rv = 0;", "    unsigned char *enckey = NULL, *cek = NULL;", "    size_t enckeylen;", "    size_t ceklen;", "    CMS_EncryptedContentInfo *ec;", "    enckeylen = rek->encryptedKey->length;", "    enckey = rek->encryptedKey->data;", "    /* Setup all parameters to derive KEK */", "    if (!cms_env_asn1_ctrl(ri, 1))", "        goto err;"], "SrcStart": 232}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/cms/cms_kari.c", "Line": 237}]}, "start": 21, "end": 30, "page": 4, "total_pages": 12, "language": "en"}