var data = {"bug_cases": {"BugType": "NULL pointer dereference", "Severity": 12, "CaseList": [{"HashID": "3da965245308ff904ec1e717d73a4b63", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f2272d8c3c73e81d46873146c8a9a7e1.c", "FileName": "crypto/stack/stack.c", "Line": 390, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 385}, {"FileMD5": "16ad2d95f2247011da5802d8ce925e16.h", "FileName": "crypto/rsa/rsa_local.h", "Line": 26, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["    BIGNUM *pp;", "    BN_MONT_CTX *m;", "} RSA_PRIME_INFO;", "", "DECLARE_ASN1_ITEM(RSA_PRIME_INFO)", "DEFINE_STACK_OF(RSA_PRIME_INFO)", "", "struct rsa_st {", "    /*", "     * The first parameter is used to pickup errors where this is passed"], "SrcStart": 21}, {"FileMD5": "b21b379ec9e81ff2ae9bca49aa0c565a.c", "FileName": "crypto/rsa/rsa_chk.c", "Line": 78, "Tip": "Function <b>sk_RSA_PRIME_INFO_value</b> executes and stores the return value to <b>pinfo</b> (<b>pinfo</b> can be null)", "SrcLines": ["        RSAerr(RSA_F_RSA_CHECK_KEY_EX, RSA_R_Q_NOT_PRIME);", "    }", "", "    /* r_i prime? */", "    for (idx = 0; idx < ex_primes; idx++) {", "        pinfo = sk_RSA_PRIME_INFO_value(key->prime_infos, idx);", "        if (BN_is_prime_ex(pinfo->r, BN_prime_checks, NULL, cb) != 1) {", "            ret = 0;", "            RSAerr(RSA_F_RSA_CHECK_KEY_EX, RSA_R_MP_R_NOT_PRIME);", "        }"], "SrcStart": 73}, {"FileMD5": "b21b379ec9e81ff2ae9bca49aa0c565a.c", "FileName": "crypto/rsa/rsa_chk.c", "Line": 79, "Tip": "Load value from <b>pinfo-&gt;r</b>", "SrcLines": ["    }", "", "    /* r_i prime? */", "    for (idx = 0; idx < ex_primes; idx++) {", "        pinfo = sk_RSA_PRIME_INFO_value(key->prime_infos, idx);", "        if (BN_is_prime_ex(pinfo->r, BN_prime_checks, NULL, cb) != 1) {", "            ret = 0;", "            RSAerr(RSA_F_RSA_CHECK_KEY_EX, RSA_R_MP_R_NOT_PRIME);", "        }", "    }"], "SrcStart": 74}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/rsa/rsa_chk.c", "Line": 79}, {"HashID": "0e2da0d1bba64a78352fa1a81ef17d36", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f2272d8c3c73e81d46873146c8a9a7e1.c", "FileName": "crypto/stack/stack.c", "Line": 390, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 385}, {"FileMD5": "16ad2d95f2247011da5802d8ce925e16.h", "FileName": "crypto/rsa/rsa_local.h", "Line": 26, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["    BIGNUM *pp;", "    BN_MONT_CTX *m;", "} RSA_PRIME_INFO;", "", "DECLARE_ASN1_ITEM(RSA_PRIME_INFO)", "DEFINE_STACK_OF(RSA_PRIME_INFO)", "", "struct rsa_st {", "    /*", "     * The first parameter is used to pickup errors where this is passed"], "SrcStart": 21}, {"FileMD5": "b21b379ec9e81ff2ae9bca49aa0c565a.c", "FileName": "crypto/rsa/rsa_chk.c", "Line": 91, "Tip": "Function <b>sk_RSA_PRIME_INFO_value</b> executes and stores the return value to <b>pinfo</b> (<b>pinfo</b> can be null)", "SrcLines": ["    if (!BN_mul(i, key->p, key->q, ctx)) {", "        ret = -1;", "        goto err;", "    }", "    for (idx = 0; idx < ex_primes; idx++) {", "        pinfo = sk_RSA_PRIME_INFO_value(key->prime_infos, idx);", "        if (!BN_mul(i, i, pinfo->r, ctx)) {", "            ret = -1;", "            goto err;", "        }"], "SrcStart": 86}, {"FileMD5": "b21b379ec9e81ff2ae9bca49aa0c565a.c", "FileName": "crypto/rsa/rsa_chk.c", "Line": 92, "Tip": "Load value from <b>pinfo-&gt;r</b>", "SrcLines": ["        ret = -1;", "        goto err;", "    }", "    for (idx = 0; idx < ex_primes; idx++) {", "        pinfo = sk_RSA_PRIME_INFO_value(key->prime_infos, idx);", "        if (!BN_mul(i, i, pinfo->r, ctx)) {", "            ret = -1;", "            goto err;", "        }", "    }"], "SrcStart": 87}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/rsa/rsa_chk.c", "Line": 92}, {"HashID": "7c1b9f5a349710ec972a16cdc082fa1a", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f2272d8c3c73e81d46873146c8a9a7e1.c", "FileName": "crypto/stack/stack.c", "Line": 390, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 385}, {"FileMD5": "b256c38eceb1ae57a149b5fa106dacec.h", "FileName": "include/openssl/txt_db.h", "Line": 31, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["#ifdef  __cplusplus", "extern \"C\" {", "#endif", "", "typedef OPENSSL_STRING *OPENSSL_PSTRING;", "DEFINE_SPECIAL_STACK_OF(OPENSSL_PSTRING, OPENSSL_STRING)", "", "typedef struct txt_db_st {", "    int num_fields;", "    STACK_OF(OPENSSL_PSTRING) *data;"], "SrcStart": 26}, {"FileMD5": "6586885598bd27745f4b0a4849db3476.c", "FileName": "crypto/txt_db/txt_db.c", "Line": 301, "Tip": "Function <b>sk_OPENSSL_PSTRING_value</b> executes and stores the return value to <b>p</b> (<b>p</b> can be null)", "SrcLines": ["        for (i = sk_OPENSSL_PSTRING_num(db->data) - 1; i >= 0; i--) {", "            /*", "             * check if any 'fields' have been allocated from outside of the", "             * initial block", "             */", "            p = sk_OPENSSL_PSTRING_value(db->data, i);", "            max = p[db->num_fields]; /* last address */", "            if (max == NULL) {  /* new row */", "                for (n = 0; n < db->num_fields; n++)", "                    OPENSSL_free(p[n]);"], "SrcStart": 296}, {"FileMD5": "6586885598bd27745f4b0a4849db3476.c", "FileName": "crypto/txt_db/txt_db.c", "Line": 302, "Tip": "Load value from <b>p[db-&gt;num_fields]</b> and assign to <b>max</b>", "SrcLines": ["            /*", "             * check if any 'fields' have been allocated from outside of the", "             * initial block", "             */", "            p = sk_OPENSSL_PSTRING_value(db->data, i);", "            max = p[db->num_fields]; /* last address */", "            if (max == NULL) {  /* new row */", "                for (n = 0; n < db->num_fields; n++)", "                    OPENSSL_free(p[n]);", "            } else {"], "SrcStart": 297}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/txt_db/txt_db.c", "Line": 302}, {"HashID": "d6ffb54cb1c1bb6e516224005d491e28", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "51402a1f18e267e9774dab8f332d1091.c", "FileName": "crypto/ui/ui_lib.c", "Line": 813, "Tip": "Return <b>null</b> to caller", "SrcLines": ["    case UIT_INFO:", "    case UIT_ERROR:", "        break;", "    }", "    return NULL;", "}", "", "int UI_get_result_string_length(UI_STRING *uis)", "{", "    switch (uis->type) {"], "SrcStart": 808}, {"FileMD5": "0b3591c6cc699f613477be2bcf988c75.c", "FileName": "crypto/ui/ui_openssl.c", "Line": 249, "Tip": "The return value of function <b>UI_get0_result_string</b> is used as the 1st parameter in function <b>strcmp</b> (the return value of function <b>UI_get0_result_string</b> can be null)", "SrcLines": ["        fflush(tty_out);", "        if ((ok = read_string_inner(ui, uis,", "                                    UI_get_input_flags(uis) &", "                                    UI_INPUT_FLAG_ECHO, 1)) <= 0)", "            return ok;", "        if (strcmp(UI_get0_result_string(uis), UI_get0_test_string(uis)) != 0) {", "            fprintf(tty_out, \"Verify failure\\n\");", "            fflush(tty_out);", "            return 0;", "        }"], "SrcStart": 244}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/ui/ui_openssl.c", "Line": 249}, {"HashID": "8759c7df3df1d1596e91788b398b86e7", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "526b1c5b917cc4f9929bbc7f1e2abe2f.c", "FileName": "crypto/ex_data.c", "Line": 399, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *CRYPTO_get_ex_data(const CRYPTO_EX_DATA *ad, int idx)", "{", "    if (ad->sk == NULL || idx >= sk_void_num(ad->sk))", "        return NULL;", "    return sk_void_value(ad->sk, idx);", "}"], "SrcStart": 394}, {"FileMD5": "51402a1f18e267e9774dab8f332d1091.c", "FileName": "crypto/ui/ui_lib.c", "Line": 767, "Tip": "Return the return value of function <b>CRYPTO_get_ex_data</b> to caller", "SrcLines": ["    return NULL;", "}", "", "const void *UI_method_get_ex_data(const UI_METHOD *method, int idx)", "{", "    return CRYPTO_get_ex_data(&method->ex_data, idx);", "}", "", "enum UI_string_types UI_get_string_type(UI_STRING *uis)", "{"], "SrcStart": 762}, {"FileMD5": "a04d678d81239776c31db57d99996097.c", "FileName": "crypto/ui/ui_util.c", "Line": 110, "Tip": "Function <b>UI_method_get_ex_data</b> executes and stores the return value to <b>data</b> (<b>data</b> can be null)", "SrcLines": ["    switch (UI_get_string_type(uis)) {", "    case UIT_PROMPT:", "        {", "            char result[PEM_BUFSIZE + 1];", "            const struct pem_password_cb_data *data =", "                UI_method_get_ex_data(UI_get_method(ui), ui_method_data_index);", "            int maxsize = UI_get_result_maxsize(uis);", "            int len = data->cb(result,", "                               maxsize > PEM_BUFSIZE ? PEM_BUFSIZE : maxsize,", "                               data->rwflag, UI_get0_user_data(ui));"], "SrcStart": 105}, {"FileMD5": "a04d678d81239776c31db57d99996097.c", "FileName": "crypto/ui/ui_util.c", "Line": 112, "Tip": "Load value from <b>data-&gt;cb</b>", "SrcLines": ["        {", "            char result[PEM_BUFSIZE + 1];", "            const struct pem_password_cb_data *data =", "                UI_method_get_ex_data(UI_get_method(ui), ui_method_data_index);", "            int maxsize = UI_get_result_maxsize(uis);", "            int len = data->cb(result,", "                               maxsize > PEM_BUFSIZE ? PEM_BUFSIZE : maxsize,", "                               data->rwflag, UI_get0_user_data(ui));", "", "            if (len >= 0)"], "SrcStart": 107}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/ui/ui_util.c", "Line": 112}, {"HashID": "8a7d96346c73990e5eb0c24cbae891c6", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f2272d8c3c73e81d46873146c8a9a7e1.c", "FileName": "crypto/stack/stack.c", "Line": 390, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 385}, {"FileMD5": "bca7eb7c72dbbf6d7fcda63514d9f27e.h", "FileName": "include/openssl/x509.h", "Line": 99, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct x509_cert_aux_st X509_CERT_AUX;", "", "typedef struct x509_cinf_st X509_CINF;", "", "DEFINE_STACK_OF(X509)", "", "/* This is used for a table of trust checking functions */", "", "typedef struct x509_trust_st {"], "SrcStart": 94}, {"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 1252, "Tip": "Function <b>sk_X509_value</b> executes and stores the return value to <b>crl_issuer</b> (<b>crl_issuer</b> can be null)", "SrcLines": ["    int i;", "", "    if (cidx != sk_X509_num(ctx->chain) - 1)", "        cidx++;", "", "    crl_issuer = sk_X509_value(ctx->chain, cidx);", "", "    if (X509_check_akid(crl_issuer, crl->akid) == X509_V_OK) {", "        if (*pcrl_score & CRL_SCORE_ISSUER_NAME) {", "            *pcrl_score |= CRL_SCORE_AKID | CRL_SCORE_ISSUER_CERT;"], "SrcStart": 1247}, {"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 1254, "Tip": "<b>crl_issuer</b> is used as the 1st parameter in function <b>X509_check_akid</b> (<b>crl_issuer</b> can be null)", "SrcLines": ["    if (cidx != sk_X509_num(ctx->chain) - 1)", "        cidx++;", "", "    crl_issuer = sk_X509_value(ctx->chain, cidx);", "", "    if (X509_check_akid(crl_issuer, crl->akid) == X509_V_OK) {", "        if (*pcrl_score & CRL_SCORE_ISSUER_NAME) {", "            *pcrl_score |= CRL_SCORE_AKID | CRL_SCORE_ISSUER_CERT;", "            *pissuer = crl_issuer;", "            return;"], "SrcStart": 1249}, {"FileMD5": "c1d07122801b927b8b3769e6b29a0184.c", "FileName": "crypto/x509v3/v3_purp.c", "Line": 912, "Tip": "<b>issuer</b> is used as the 1st parameter in function <b>X509_get_issuer_name</b> (<b>issuer</b> can be null)", "SrcLines": ["            if (gen->type == GEN_DIRNAME) {", "                nm = gen->d.dirn;", "                break;", "            }", "        }", "        if (nm && X509_NAME_cmp(nm, X509_get_issuer_name(issuer)))", "            return X509_V_ERR_AKID_ISSUER_SERIAL_MISMATCH;", "    }", "    return X509_V_OK;", "}"], "SrcStart": 907}, {"FileMD5": "7c9e4de7e709d5101ccb55eeaa778475.c", "FileName": "crypto/x509/x509_cmp.c", "Line": 86, "Tip": "Load value from <b>a-&gt;cert_info.issuer</b>", "SrcLines": ["    return memcmp(a->sha1_hash, b->sha1_hash, 20);", "}", "", "X509_NAME *X509_get_issuer_name(const X509 *a)", "{", "    return a->cert_info.issuer;", "}", "", "unsigned long X509_issuer_name_hash(X509 *x)", "{"], "SrcStart": 81}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/x509/x509_cmp.c", "Line": 86}, {"HashID": "53610cad75baeda66169c565d9be9806", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f2272d8c3c73e81d46873146c8a9a7e1.c", "FileName": "crypto/stack/stack.c", "Line": 390, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 385}, {"FileMD5": "bca7eb7c72dbbf6d7fcda63514d9f27e.h", "FileName": "include/openssl/x509.h", "Line": 99, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct x509_cert_aux_st X509_CERT_AUX;", "", "typedef struct x509_cinf_st X509_CINF;", "", "DEFINE_STACK_OF(X509)", "", "/* This is used for a table of trust checking functions */", "", "typedef struct x509_trust_st {"], "SrcStart": 94}, {"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 1263, "Tip": "Function <b>sk_X509_value</b> executes and stores the return value to <b>crl_issuer</b> (<b>crl_issuer</b> can be null)", "SrcLines": ["            return;", "        }", "    }", "", "    for (cidx++; cidx < sk_X509_num(ctx->chain); cidx++) {", "        crl_issuer = sk_X509_value(ctx->chain, cidx);", "        if (X509_NAME_cmp(X509_get_subject_name(crl_issuer), cnm))", "            continue;", "        if (X509_check_akid(crl_issuer, crl->akid) == X509_V_OK) {", "            *pcrl_score |= CRL_SCORE_AKID | CRL_SCORE_SAME_PATH;"], "SrcStart": 1258}, {"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 1264, "Tip": "<b>crl_issuer</b> is used as the 1st parameter in function <b>X509_get_subject_name</b> (<b>crl_issuer</b> can be null)", "SrcLines": ["        }", "    }", "", "    for (cidx++; cidx < sk_X509_num(ctx->chain); cidx++) {", "        crl_issuer = sk_X509_value(ctx->chain, cidx);", "        if (X509_NAME_cmp(X509_get_subject_name(crl_issuer), cnm))", "            continue;", "        if (X509_check_akid(crl_issuer, crl->akid) == X509_V_OK) {", "            *pcrl_score |= CRL_SCORE_AKID | CRL_SCORE_SAME_PATH;", "            *pissuer = crl_issuer;"], "SrcStart": 1259}, {"FileMD5": "7c9e4de7e709d5101ccb55eeaa778475.c", "FileName": "crypto/x509/x509_cmp.c", "Line": 103, "Tip": "Load value from <b>a-&gt;cert_info.subject</b>", "SrcLines": ["}", "#endif", "", "X509_NAME *X509_get_subject_name(const X509 *a)", "{", "    return a->cert_info.subject;", "}", "", "ASN1_INTEGER *X509_get_serialNumber(X509 *a)", "{"], "SrcStart": 98}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/x509/x509_cmp.c", "Line": 103}, {"HashID": "52935434a8addab199e1d61d2ad21e49", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "f2272d8c3c73e81d46873146c8a9a7e1.c", "FileName": "crypto/stack/stack.c", "Line": 390, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 385}, {"FileMD5": "bca7eb7c72dbbf6d7fcda63514d9f27e.h", "FileName": "include/openssl/x509.h", "Line": 99, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct x509_cert_aux_st X509_CERT_AUX;", "", "typedef struct x509_cinf_st X509_CINF;", "", "DEFINE_STACK_OF(X509)", "", "/* This is used for a table of trust checking functions */", "", "typedef struct x509_trust_st {"], "SrcStart": 94}, {"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 1345, "Tip": "Function <b>sk_X509_value</b> executes and stores the return value to <b>cert_ta</b> (<b>cert_ta</b> can be null)", "SrcLines": ["static int check_crl_chain(X509_STORE_CTX *ctx,", "                           STACK_OF(X509) *cert_path,", "                           STACK_OF(X509) *crl_path)", "{", "    X509 *cert_ta, *crl_ta;", "    cert_ta = sk_X509_value(cert_path, sk_X509_num(cert_path) - 1);", "    crl_ta = sk_X509_value(crl_path, sk_X509_num(crl_path) - 1);", "    if (!X509_cmp(cert_ta, crl_ta))", "        return 1;", "    return 0;"], "SrcStart": 1340}, {"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 1347, "Tip": "<b>cert_ta</b> is used as the 1st parameter in function <b>X509_cmp</b> (<b>cert_ta</b> can be null)", "SrcLines": ["                           STACK_OF(X509) *crl_path)", "{", "    X509 *cert_ta, *crl_ta;", "    cert_ta = sk_X509_value(cert_path, sk_X509_num(cert_path) - 1);", "    crl_ta = sk_X509_value(crl_path, sk_X509_num(crl_path) - 1);", "    if (!X509_cmp(cert_ta, crl_ta))", "        return 1;", "    return 0;", "}", ""], "SrcStart": 1342}, {"FileMD5": "7c9e4de7e709d5101ccb55eeaa778475.c", "FileName": "crypto/x509/x509_cmp.c", "Line": 147, "Tip": "Load value from <b>a-&gt;ex_flags</b>", "SrcLines": ["", "    /* try to make sure hash is valid */", "    (void)X509_check_purpose((X509 *)a, -1, 0);", "    (void)X509_check_purpose((X509 *)b, -1, 0);", "", "    if ((a->ex_flags & EXFLAG_NO_FINGERPRINT) == 0", "            && (b->ex_flags & EXFLAG_NO_FINGERPRINT) == 0)", "        rv = memcmp(a->sha1_hash, b->sha1_hash, SHA_DIGEST_LENGTH);", "    if (rv != 0)", "        return rv;"], "SrcStart": 142}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/x509/x509_cmp.c", "Line": 147}, {"HashID": "7f92f616698804ffbae5415d1624b855", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 3022, "Tip": "Store <b>null</b> to <b>xtmp</b>", "SrcLines": ["     */", "    depth = ctx->param->depth + 1;", "", "    while (search != 0) {", "        X509 *x;", "        X509 *xtmp = NULL;", "", "        /*", "         * Look in the trust store if enabled for first lookup, or we've run", "         * out of untrusted issuers and search here is not disabled.  When we"], "SrcStart": 3017}, {"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 3130, "Tip": "<b>xtmp</b> is used as the 2nd parameter in function <b>X509_cmp</b> (<b>xtmp</b> can be null)", "SrcLines": ["                     * We have a self-signed certificate that has the same", "                     * subject name (and perhaps keyid and/or serial number) as", "                     * a trust-anchor.  We must have an exact match to avoid", "                     * possible impersonation via key substitution etc.", "                     */", "                    if (X509_cmp(x, xtmp) != 0) {", "                        /* Self-signed untrusted mimic. */", "                        X509_free(xtmp);", "                        ok = 0;", "                    } else {"], "SrcStart": 3125}, {"FileMD5": "7c9e4de7e709d5101ccb55eeaa778475.c", "FileName": "crypto/x509/x509_cmp.c", "Line": 148, "Tip": "Load value from <b>b-&gt;ex_flags</b>", "SrcLines": ["    /* try to make sure hash is valid */", "    (void)X509_check_purpose((X509 *)a, -1, 0);", "    (void)X509_check_purpose((X509 *)b, -1, 0);", "", "    if ((a->ex_flags & EXFLAG_NO_FINGERPRINT) == 0", "            && (b->ex_flags & EXFLAG_NO_FINGERPRINT) == 0)", "        rv = memcmp(a->sha1_hash, b->sha1_hash, SHA_DIGEST_LENGTH);", "    if (rv != 0)", "        return rv;", ""], "SrcStart": 143}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/x509/x509_cmp.c", "Line": 148}, {"HashID": "2be4cf49fdb7604bce5d7f9b737cdb8b", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 3022, "Tip": "Store <b>null</b> to <b>xtmp</b>", "SrcLines": ["     */", "    depth = ctx->param->depth + 1;", "", "    while (search != 0) {", "        X509 *x;", "        X509 *xtmp = NULL;", "", "        /*", "         * Look in the trust store if enabled for first lookup, or we've run", "         * out of untrusted issuers and search here is not disabled.  When we"], "SrcStart": 3017}, {"FileMD5": "87527097900edf976ffa31138e4c5ff9.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 3130, "Tip": "<b>xtmp</b> is used as the 2nd parameter in function <b>X509_cmp</b> (<b>xtmp</b> can be null)", "SrcLines": ["                     * We have a self-signed certificate that has the same", "                     * subject name (and perhaps keyid and/or serial number) as", "                     * a trust-anchor.  We must have an exact match to avoid", "                     * possible impersonation via key substitution etc.", "                     */", "                    if (X509_cmp(x, xtmp) != 0) {", "                        /* Self-signed untrusted mimic. */", "                        X509_free(xtmp);", "                        ok = 0;", "                    } else {"], "SrcStart": 3125}, {"FileMD5": "7c9e4de7e709d5101ccb55eeaa778475.c", "FileName": "crypto/x509/x509_cmp.c", "Line": 154, "Tip": "Load value from <b>b-&gt;cert_info.enc.modified</b>", "SrcLines": ["        rv = memcmp(a->sha1_hash, b->sha1_hash, SHA_DIGEST_LENGTH);", "    if (rv != 0)", "        return rv;", "", "    /* Check for match against stored encoding too */", "    if (!a->cert_info.enc.modified && !b->cert_info.enc.modified) {", "        if (a->cert_info.enc.len < b->cert_info.enc.len)", "            return -1;", "        if (a->cert_info.enc.len > b->cert_info.enc.len)", "            return 1;"], "SrcStart": 149}], "Review": 80, "Time": 1630075710000, "DocID": "PE0001", "File": "crypto/x509/x509_cmp.c", "Line": 154}]}, "start": 51, "end": 60, "page": 7, "total_pages": 12, "language": "en"}