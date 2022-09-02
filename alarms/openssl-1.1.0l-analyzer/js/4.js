var data = {"bug_cases": {"BugType": "NULL pointer dereference", "Severity": 12, "CaseList": [{"HashID": "bb28b2391cae2fd508383f2209a0b04f", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "bb6e5fbd7187922b84dca292e0afd919.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 235, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 230}, {"FileMD5": "460e3f6aeca723415080e60babba446b.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 522, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>Z_2</b> (<b>Z_2</b> can be null)", "SrcLines": ["    }", "", "    BN_CTX_start(ctx);", "    Z = BN_CTX_get(ctx);", "    Z_1 = BN_CTX_get(ctx);", "    Z_2 = BN_CTX_get(ctx);", "    Z_3 = BN_CTX_get(ctx);", "    if (Z_3 == NULL)", "        goto err;", ""], "SrcStart": 517}, {"FileMD5": "460e3f6aeca723415080e60babba446b.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 569, "Tip": "<b>Z_2</b> is used as the 1st parameter in function <b>BN_mod_sqr</b> (<b>Z_2</b> can be null)", "SrcLines": ["        if (group->meth->field_encode == 0) {", "            /* field_sqr works on standard representation */", "            if (!group->meth->field_sqr(group, Z_2, Z_1, ctx))", "                goto err;", "        } else {", "            if (!BN_mod_sqr(Z_2, Z_1, group->field, ctx))", "                goto err;", "        }", "", "        if (x != NULL) {"], "SrcStart": 564}, {"FileMD5": "1e76b067138b916af123cab81559a14b.c", "FileName": "crypto/bn/bn_mod.c", "Line": 224, "Tip": "<b>r</b> is used as the 1st parameter in function <b>BN_sqr</b> (<b>r</b> can be null)", "SrcLines": ["    return (ret);", "}", "", "int BN_mod_sqr(BIGNUM *r, const BIGNUM *a, const BIGNUM *m, BN_CTX *ctx)", "{", "    if (!BN_sqr(r, a, ctx))", "        return 0;", "    /* r->neg == 0,  thus we don't need BN_nnmod */", "    return BN_mod(r, r, m, ctx);", "}"], "SrcStart": 219}, {"FileMD5": "b2d28d407620ad0fdae5de76c2d2cb9d.c", "FileName": "crypto/bn/bn_sqr.c", "Line": 21, "Tip": "<b>r</b> is used as the 1st parameter in function <b>bn_correct_top</b> (<b>r</b> can be null)", "SrcLines": [" */", "int BN_sqr(BIGNUM *r, const BIGNUM *a, BN_CTX *ctx)", "{", "    int ret = bn_sqr_fixed_top(r, a, ctx);", "", "    bn_correct_top(r);", "    bn_check_top(r);", "", "    return ret;", "}"], "SrcStart": 16}, {"FileMD5": "0ac2afd7963f3ad0139299afd2c6bde6.c", "FileName": "crypto/bn/bn_lib.c", "Line": 1103, "Tip": "Load value from <b>a-&gt;top</b> and assign to <b>tmp_top</b>", "SrcLines": ["}", "", "void bn_correct_top(BIGNUM *a)", "{", "    BN_ULONG *ftl;", "    int tmp_top = a->top;", "", "    if (tmp_top > 0) {", "        for (ftl = &(a->d[tmp_top]); tmp_top > 0; tmp_top--) {", "            ftl--;"], "SrcStart": 1098}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/bn/bn_lib.c", "Line": 1103}, {"HashID": "f87b2fe26825f93c5a6b69c96c59430e", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "bb6e5fbd7187922b84dca292e0afd919.c", "FileName": "crypto/bn/bn_ctx.c", "Line": 235, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    /* clear BN_FLG_CONSTTIME if leaked from previous frames */", "    ret->flags &= (\u203eBN_FLG_CONSTTIME);", "    ctx->used++;", "    CTXDBG_RET(ctx, ret);", "    return ret;", "}", "", "/************/", "/* BN_STACK */", "/************/"], "SrcStart": 230}, {"FileMD5": "460e3f6aeca723415080e60babba446b.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 522, "Tip": "Function <b>BN_CTX_get</b> executes and stores the return value to <b>Z_2</b> (<b>Z_2</b> can be null)", "SrcLines": ["    }", "", "    BN_CTX_start(ctx);", "    Z = BN_CTX_get(ctx);", "    Z_1 = BN_CTX_get(ctx);", "    Z_2 = BN_CTX_get(ctx);", "    Z_3 = BN_CTX_get(ctx);", "    if (Z_3 == NULL)", "        goto err;", ""], "SrcStart": 517}, {"FileMD5": "460e3f6aeca723415080e60babba446b.c", "FileName": "crypto/ec/ecp_smpl.c", "Line": 569, "Tip": "<b>Z_2</b> is used as the 1st parameter in function <b>BN_mod_sqr</b> (<b>Z_2</b> can be null)", "SrcLines": ["        if (group->meth->field_encode == 0) {", "            /* field_sqr works on standard representation */", "            if (!group->meth->field_sqr(group, Z_2, Z_1, ctx))", "                goto err;", "        } else {", "            if (!BN_mod_sqr(Z_2, Z_1, group->field, ctx))", "                goto err;", "        }", "", "        if (x != NULL) {"], "SrcStart": 564}, {"FileMD5": "1e76b067138b916af123cab81559a14b.c", "FileName": "crypto/bn/bn_mod.c", "Line": 224, "Tip": "<b>r</b> is used as the 1st parameter in function <b>BN_sqr</b> (<b>r</b> can be null)", "SrcLines": ["    return (ret);", "}", "", "int BN_mod_sqr(BIGNUM *r, const BIGNUM *a, const BIGNUM *m, BN_CTX *ctx)", "{", "    if (!BN_sqr(r, a, ctx))", "        return 0;", "    /* r->neg == 0,  thus we don't need BN_nnmod */", "    return BN_mod(r, r, m, ctx);", "}"], "SrcStart": 219}, {"FileMD5": "b2d28d407620ad0fdae5de76c2d2cb9d.c", "FileName": "crypto/bn/bn_sqr.c", "Line": 19, "Tip": "<b>r</b> is used as the 1st parameter in function <b>bn_sqr_fixed_top</b> (<b>r</b> can be null)", "SrcLines": ["/*", " * I've just gone over this and it is now %20 faster on x86 - eay - 27 Jun 96", " */", "int BN_sqr(BIGNUM *r, const BIGNUM *a, BN_CTX *ctx)", "{", "    int ret = bn_sqr_fixed_top(r, a, ctx);", "", "    bn_correct_top(r);", "    bn_check_top(r);", ""], "SrcStart": 14}, {"FileMD5": "b2d28d407620ad0fdae5de76c2d2cb9d.c", "FileName": "crypto/bn/bn_sqr.c", "Line": 37, "Tip": "Store <b>0</b> to <b>r-&gt;top</b>", "SrcLines": ["", "    bn_check_top(a);", "", "    al = a->top;", "    if (al <= 0) {", "        r->top = 0;", "        r->neg = 0;", "        return 1;", "    }", ""], "SrcStart": 32}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/bn/bn_sqr.c", "Line": 37}, {"HashID": "f8f01afb35b3e882c9a7d9f04dadee6b", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "4944b7455f37fe8815a22c7ae5743b75.h", "FileName": "include/openssl/cms.h", "Line": 33, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["typedef struct CMS_Receipt_st CMS_Receipt;", "typedef struct CMS_RecipientEncryptedKey_st CMS_RecipientEncryptedKey;", "typedef struct CMS_OtherKeyAttribute_st CMS_OtherKeyAttribute;", "", "DEFINE_STACK_OF(CMS_SignerInfo)", "DEFINE_STACK_OF(CMS_RecipientEncryptedKey)", "DEFINE_STACK_OF(CMS_RecipientInfo)", "DEFINE_STACK_OF(CMS_RevocationInfoChoice)", "DECLARE_ASN1_FUNCTIONS(CMS_ContentInfo)", "DECLARE_ASN1_FUNCTIONS(CMS_ReceiptRequest)"], "SrcStart": 28}, {"FileMD5": "24776c8ae428338759d86e1f9652a1a6.c", "FileName": "crypto/cms/cms_smime.c", "Line": 588, "Tip": "Function <b>sk_CMS_RecipientEncryptedKey_value</b> executes and stores the return value to <b>rek</b> (<b>rek</b> can be null)", "SrcLines": ["    STACK_OF(CMS_RecipientEncryptedKey) *reks;", "    CMS_RecipientEncryptedKey *rek;", "    reks = CMS_RecipientInfo_kari_get0_reks(ri);", "    for (i = 0; i < sk_CMS_RecipientEncryptedKey_num(reks); i++) {", "        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);"], "SrcStart": 583}, {"FileMD5": "24776c8ae428338759d86e1f9652a1a6.c", "FileName": "crypto/cms/cms_smime.c", "Line": 589, "Tip": "<b>rek</b> is used as the 1st parameter in function <b>CMS_RecipientEncryptedKey_cert_cmp</b> (<b>rek</b> can be null)", "SrcLines": ["    CMS_RecipientEncryptedKey *rek;", "    reks = CMS_RecipientInfo_kari_get0_reks(ri);", "    for (i = 0; i < sk_CMS_RecipientEncryptedKey_num(reks); i++) {", "        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);", "        CMS_RecipientInfo_kari_set0_pkey(ri, NULL);"], "SrcStart": 584}, {"FileMD5": "cd7ba017f5f908e70da2115c23e66751.c", "FileName": "crypto/cms/cms_kari.c", "Line": 146, "Tip": "Load value from <b>rek-&gt;rid</b> and assign to <b>rid</b>", "SrcLines": ["}", "", "int CMS_RecipientEncryptedKey_cert_cmp(CMS_RecipientEncryptedKey *rek,", "                                       X509 *cert)", "{", "    CMS_KeyAgreeRecipientIdentifier *rid = rek->rid;", "    if (rid->type == CMS_REK_ISSUER_SERIAL)", "        return cms_ias_cert_cmp(rid->d.issuerAndSerialNumber, cert);", "    else if (rid->type == CMS_REK_KEYIDENTIFIER)", "        return cms_keyid_cert_cmp(rid->d.rKeyId->subjectKeyIdentifier, cert);"], "SrcStart": 141}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/cms/cms_kari.c", "Line": 146}, {"HashID": "702dd63124a7d64ed9b7d3685d78246e", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "4944b7455f37fe8815a22c7ae5743b75.h", "FileName": "include/openssl/cms.h", "Line": 33, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["typedef struct CMS_Receipt_st CMS_Receipt;", "typedef struct CMS_RecipientEncryptedKey_st CMS_RecipientEncryptedKey;", "typedef struct CMS_OtherKeyAttribute_st CMS_OtherKeyAttribute;", "", "DEFINE_STACK_OF(CMS_SignerInfo)", "DEFINE_STACK_OF(CMS_RecipientEncryptedKey)", "DEFINE_STACK_OF(CMS_RecipientInfo)", "DEFINE_STACK_OF(CMS_RevocationInfoChoice)", "DECLARE_ASN1_FUNCTIONS(CMS_ContentInfo)", "DECLARE_ASN1_FUNCTIONS(CMS_ReceiptRequest)"], "SrcStart": 28}, {"FileMD5": "24776c8ae428338759d86e1f9652a1a6.c", "FileName": "crypto/cms/cms_smime.c", "Line": 588, "Tip": "Function <b>sk_CMS_RecipientEncryptedKey_value</b> executes and stores the return value to <b>rek</b> (<b>rek</b> can be null)", "SrcLines": ["    STACK_OF(CMS_RecipientEncryptedKey) *reks;", "    CMS_RecipientEncryptedKey *rek;", "    reks = CMS_RecipientInfo_kari_get0_reks(ri);", "    for (i = 0; i < sk_CMS_RecipientEncryptedKey_num(reks); i++) {", "        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);"], "SrcStart": 583}, {"FileMD5": "24776c8ae428338759d86e1f9652a1a6.c", "FileName": "crypto/cms/cms_smime.c", "Line": 589, "Tip": "Select the false branch at this point (<b>cert!=null</b> is false)", "SrcLines": ["    CMS_RecipientEncryptedKey *rek;", "    reks = CMS_RecipientInfo_kari_get0_reks(ri);", "    for (i = 0; i < sk_CMS_RecipientEncryptedKey_num(reks); i++) {", "        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);", "        CMS_RecipientInfo_kari_set0_pkey(ri, NULL);"], "SrcStart": 584}, {"FileMD5": "24776c8ae428338759d86e1f9652a1a6.c", "FileName": "crypto/cms/cms_smime.c", "Line": 592, "Tip": "<b>rek</b> is used as the 3rd parameter in function <b>CMS_RecipientInfo_kari_decrypt</b> (<b>rek</b> can be null)", "SrcLines": ["        int rv;", "        rek = sk_CMS_RecipientEncryptedKey_value(reks, i);", "        if (cert != NULL && CMS_RecipientEncryptedKey_cert_cmp(rek, cert))", "            continue;", "        CMS_RecipientInfo_kari_set0_pkey(ri, pk);", "        rv = CMS_RecipientInfo_kari_decrypt(cms, ri, rek);", "        CMS_RecipientInfo_kari_set0_pkey(ri, NULL);", "        if (rv > 0)", "            return 1;", "        return cert == NULL ? 0 : -1;"], "SrcStart": 587}, {"FileMD5": "cd7ba017f5f908e70da2115c23e66751.c", "FileName": "crypto/cms/cms_kari.c", "Line": 238, "Tip": "Load value from <b>rek-&gt;encryptedKey</b>", "SrcLines": ["    unsigned char *enckey = NULL, *cek = NULL;", "    size_t enckeylen;", "    size_t ceklen;", "    CMS_EncryptedContentInfo *ec;", "    enckeylen = rek->encryptedKey->length;", "    enckey = rek->encryptedKey->data;", "    /* Setup all parameters to derive KEK */", "    if (!cms_env_asn1_ctrl(ri, 1))", "        goto err;", "    /* Attempt to decrypt CEK */"], "SrcStart": 233}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/cms/cms_kari.c", "Line": 238}, {"HashID": "1fbb30efe7c63dcdad89994b5c9b347f", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "7f7cdf2b637b725c9de62b8971d1f293.c", "FileName": "crypto/asn1/tasn_new.c", "Line": 33, "Tip": "Return <b>null</b> to caller", "SrcLines": ["{", "    ASN1_VALUE *ret = NULL;", "    if (ASN1_item_ex_new(&ret, it) > 0)", "        return ret;", "    return NULL;", "}", "", "/* Allocate an ASN1 structure */", "", "int ASN1_item_ex_new(ASN1_VALUE **pval, const ASN1_ITEM *it)"], "SrcStart": 28}, {"FileMD5": "cd7ba017f5f908e70da2115c23e66751.c", "FileName": "crypto/cms/cms_kari.c", "Line": 301, "Tip": "Function <b>ASN1_item_new</b> executes and stores the return value to <b>rek</b> (<b>rek</b> can be null)", "SrcLines": ["    ri->type = CMS_RECIPINFO_AGREE;", "", "    kari = ri->d.kari;", "    kari->version = 3;", "", "    rek = M_ASN1_new_of(CMS_RecipientEncryptedKey);", "    if (!sk_CMS_RecipientEncryptedKey_push(kari->recipientEncryptedKeys, rek)) {", "        M_ASN1_free_of(rek, CMS_RecipientEncryptedKey);", "        return 0;", "    }"], "SrcStart": 296}, {"FileMD5": "cd7ba017f5f908e70da2115c23e66751.c", "FileName": "crypto/cms/cms_kari.c", "Line": 309, "Tip": "Load value from <b>rek-&gt;rid</b>", "SrcLines": ["        return 0;", "    }", "", "    if (flags & CMS_USE_KEYID) {", "        rek->rid->type = CMS_REK_KEYIDENTIFIER;", "        rek->rid->d.rKeyId = M_ASN1_new_of(CMS_RecipientKeyIdentifier);", "        if (rek->rid->d.rKeyId == NULL)", "            return 0;", "        if (!cms_set1_keyid(&rek->rid->d.rKeyId->subjectKeyIdentifier, recip))", "            return 0;"], "SrcStart": 304}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/cms/cms_kari.c", "Line": 309}, {"HashID": "4d52ca56fac7ebf3ee466e75d6273b88", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "7f7cdf2b637b725c9de62b8971d1f293.c", "FileName": "crypto/asn1/tasn_new.c", "Line": 33, "Tip": "Return <b>null</b> to caller", "SrcLines": ["{", "    ASN1_VALUE *ret = NULL;", "    if (ASN1_item_ex_new(&ret, it) > 0)", "        return ret;", "    return NULL;", "}", "", "/* Allocate an ASN1 structure */", "", "int ASN1_item_ex_new(ASN1_VALUE **pval, const ASN1_ITEM *it)"], "SrcStart": 28}, {"FileMD5": "cd7ba017f5f908e70da2115c23e66751.c", "FileName": "crypto/cms/cms_kari.c", "Line": 301, "Tip": "Function <b>ASN1_item_new</b> executes and stores the return value to <b>rek</b> (<b>rek</b> can be null)", "SrcLines": ["    ri->type = CMS_RECIPINFO_AGREE;", "", "    kari = ri->d.kari;", "    kari->version = 3;", "", "    rek = M_ASN1_new_of(CMS_RecipientEncryptedKey);", "    if (!sk_CMS_RecipientEncryptedKey_push(kari->recipientEncryptedKeys, rek)) {", "        M_ASN1_free_of(rek, CMS_RecipientEncryptedKey);", "        return 0;", "    }"], "SrcStart": 296}, {"FileMD5": "cd7ba017f5f908e70da2115c23e66751.c", "FileName": "crypto/cms/cms_kari.c", "Line": 316, "Tip": "Load value from <b>rek-&gt;rid</b>", "SrcLines": ["            return 0;", "        if (!cms_set1_keyid(&rek->rid->d.rKeyId->subjectKeyIdentifier, recip))", "            return 0;", "    } else {", "        rek->rid->type = CMS_REK_ISSUER_SERIAL;", "        if (!cms_set1_ias(&rek->rid->d.issuerAndSerialNumber, recip))", "            return 0;", "    }", "", "    /* Create ephemeral key */"], "SrcStart": 311}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/cms/cms_kari.c", "Line": 316}, {"HashID": "07bfc93b7084dcd5df98dba5b93bb07b", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "63477441f483c214ea2246a4c9d749a8.h", "FileName": "crypto/cms/cms_lcl.h", "Line": 67, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["        /* Other types ... */", "        void *otherData;", "    } d;", "};", "", "DEFINE_STACK_OF(CMS_CertificateChoices)", "", "struct CMS_SignedData_st {", "    long version;", "    STACK_OF(X509_ALGOR) *digestAlgorithms;"], "SrcStart": 62}, {"FileMD5": "ab961d30e4b25b4019835ddf78622456.c", "FileName": "crypto/cms/cms_lib.c", "Line": 390, "Tip": "Function <b>sk_CMS_CertificateChoices_value</b> executes and stores the return value to <b>cch</b> (<b>cch</b> can be null)", "SrcLines": ["    int i;", "    pcerts = cms_get0_certificate_choices(cms);", "    if (!pcerts)", "        return 0;", "    for (i = 0; i < sk_CMS_CertificateChoices_num(*pcerts); i++) {", "        cch = sk_CMS_CertificateChoices_value(*pcerts, i);", "        if (cch->type == CMS_CERTCHOICE_CERT) {", "            if (!X509_cmp(cch->d.certificate, cert)) {", "                CMSerr(CMS_F_CMS_ADD0_CERT,", "                       CMS_R_CERTIFICATE_ALREADY_PRESENT);"], "SrcStart": 385}, {"FileMD5": "ab961d30e4b25b4019835ddf78622456.c", "FileName": "crypto/cms/cms_lib.c", "Line": 391, "Tip": "Load value from <b>cch-&gt;type</b>", "SrcLines": ["    pcerts = cms_get0_certificate_choices(cms);", "    if (!pcerts)", "        return 0;", "    for (i = 0; i < sk_CMS_CertificateChoices_num(*pcerts); i++) {", "        cch = sk_CMS_CertificateChoices_value(*pcerts, i);", "        if (cch->type == CMS_CERTCHOICE_CERT) {", "            if (!X509_cmp(cch->d.certificate, cert)) {", "                CMSerr(CMS_F_CMS_ADD0_CERT,", "                       CMS_R_CERTIFICATE_ALREADY_PRESENT);", "                return 0;"], "SrcStart": 386}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/cms/cms_lib.c", "Line": 391}, {"HashID": "8ab71df458ebbffe67fd381b43cf24d1", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "63477441f483c214ea2246a4c9d749a8.h", "FileName": "crypto/cms/cms_lcl.h", "Line": 67, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["        /* Other types ... */", "        void *otherData;", "    } d;", "};", "", "DEFINE_STACK_OF(CMS_CertificateChoices)", "", "struct CMS_SignedData_st {", "    long version;", "    STACK_OF(X509_ALGOR) *digestAlgorithms;"], "SrcStart": 62}, {"FileMD5": "ab961d30e4b25b4019835ddf78622456.c", "FileName": "crypto/cms/cms_lib.c", "Line": 488, "Tip": "Function <b>sk_CMS_CertificateChoices_value</b> executes and stores the return value to <b>cch</b> (<b>cch</b> can be null)", "SrcLines": ["    int i;", "    pcerts = cms_get0_certificate_choices(cms);", "    if (!pcerts)", "        return NULL;", "    for (i = 0; i < sk_CMS_CertificateChoices_num(*pcerts); i++) {", "        cch = sk_CMS_CertificateChoices_value(*pcerts, i);", "        if (cch->type == 0) {", "            if (!certs) {", "                certs = sk_X509_new_null();", "                if (!certs)"], "SrcStart": 483}, {"FileMD5": "ab961d30e4b25b4019835ddf78622456.c", "FileName": "crypto/cms/cms_lib.c", "Line": 489, "Tip": "Load value from <b>cch-&gt;type</b>", "SrcLines": ["    pcerts = cms_get0_certificate_choices(cms);", "    if (!pcerts)", "        return NULL;", "    for (i = 0; i < sk_CMS_CertificateChoices_num(*pcerts); i++) {", "        cch = sk_CMS_CertificateChoices_value(*pcerts, i);", "        if (cch->type == 0) {", "            if (!certs) {", "                certs = sk_X509_new_null();", "                if (!certs)", "                    return NULL;"], "SrcStart": 484}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/cms/cms_lib.c", "Line": 489}, {"HashID": "afd70f0b21c57ee6db3ac050caa99a58", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "4944b7455f37fe8815a22c7ae5743b75.h", "FileName": "include/openssl/cms.h", "Line": 35, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["typedef struct CMS_OtherKeyAttribute_st CMS_OtherKeyAttribute;", "", "DEFINE_STACK_OF(CMS_SignerInfo)", "DEFINE_STACK_OF(CMS_RecipientEncryptedKey)", "DEFINE_STACK_OF(CMS_RecipientInfo)", "DEFINE_STACK_OF(CMS_RevocationInfoChoice)", "DECLARE_ASN1_FUNCTIONS(CMS_ContentInfo)", "DECLARE_ASN1_FUNCTIONS(CMS_ReceiptRequest)", "DECLARE_ASN1_PRINT_FUNCTION(CMS_ContentInfo)", ""], "SrcStart": 30}, {"FileMD5": "ab961d30e4b25b4019835ddf78622456.c", "FileName": "crypto/cms/cms_lib.c", "Line": 516, "Tip": "Function <b>sk_CMS_RevocationInfoChoice_value</b> executes and stores the return value to <b>rch</b> (<b>rch</b> can be null)", "SrcLines": ["    int i;", "    pcrls = cms_get0_revocation_choices(cms);", "    if (!pcrls)", "        return NULL;", "    for (i = 0; i < sk_CMS_RevocationInfoChoice_num(*pcrls); i++) {", "        rch = sk_CMS_RevocationInfoChoice_value(*pcrls, i);", "        if (rch->type == 0) {", "            if (!crls) {", "                crls = sk_X509_CRL_new_null();", "                if (!crls)"], "SrcStart": 511}, {"FileMD5": "ab961d30e4b25b4019835ddf78622456.c", "FileName": "crypto/cms/cms_lib.c", "Line": 517, "Tip": "Load value from <b>rch-&gt;type</b>", "SrcLines": ["    pcrls = cms_get0_revocation_choices(cms);", "    if (!pcrls)", "        return NULL;", "    for (i = 0; i < sk_CMS_RevocationInfoChoice_num(*pcrls); i++) {", "        rch = sk_CMS_RevocationInfoChoice_value(*pcrls, i);", "        if (rch->type == 0) {", "            if (!crls) {", "                crls = sk_X509_CRL_new_null();", "                if (!crls)", "                    return NULL;"], "SrcStart": 512}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/cms/cms_lib.c", "Line": 517}, {"HashID": "bda08b0689c14141daa604372b749e5b", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "4944b7455f37fe8815a22c7ae5743b75.h", "FileName": "include/openssl/cms.h", "Line": 32, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["typedef struct CMS_ReceiptRequest_st CMS_ReceiptRequest;", "typedef struct CMS_Receipt_st CMS_Receipt;", "typedef struct CMS_RecipientEncryptedKey_st CMS_RecipientEncryptedKey;", "typedef struct CMS_OtherKeyAttribute_st CMS_OtherKeyAttribute;", "", "DEFINE_STACK_OF(CMS_SignerInfo)", "DEFINE_STACK_OF(CMS_RecipientEncryptedKey)", "DEFINE_STACK_OF(CMS_RecipientInfo)", "DEFINE_STACK_OF(CMS_RevocationInfoChoice)", "DECLARE_ASN1_FUNCTIONS(CMS_ContentInfo)"], "SrcStart": 27}, {"FileMD5": "24ae02624c57e521eda3b62895701526.c", "FileName": "crypto/cms/cms_sd.c", "Line": 483, "Tip": "Function <b>sk_CMS_SignerInfo_value</b> executes and stores the return value to <b>si</b> (<b>si</b> can be null)", "SrcLines": ["    sd = cms_get0_signed(cms);", "    if (!sd)", "        return -1;", "    certs = sd->certificates;", "    for (i = 0; i < sk_CMS_SignerInfo_num(sd->signerInfos); i++) {", "        si = sk_CMS_SignerInfo_value(sd->signerInfos, i);", "        if (si->signer)", "            continue;", "", "        for (j = 0; j < sk_X509_num(scerts); j++) {"], "SrcStart": 478}, {"FileMD5": "24ae02624c57e521eda3b62895701526.c", "FileName": "crypto/cms/cms_sd.c", "Line": 484, "Tip": "Load value from <b>si-&gt;signer</b>", "SrcLines": ["    if (!sd)", "        return -1;", "    certs = sd->certificates;", "    for (i = 0; i < sk_CMS_SignerInfo_num(sd->signerInfos); i++) {", "        si = sk_CMS_SignerInfo_value(sd->signerInfos, i);", "        if (si->signer)", "            continue;", "", "        for (j = 0; j < sk_X509_num(scerts); j++) {", "            x = sk_X509_value(scerts, j);"], "SrcStart": 479}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/cms/cms_sd.c", "Line": 484}]}, "start": 21, "end": 30, "page": 4, "total_pages": 11, "language": "en"}