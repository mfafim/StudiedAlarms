var data = {"bug_cases": {"BugType": "NULL pointer dereference", "Severity": 12, "CaseList": [{"HashID": "6e618ad72e79a2e1a01b5ee455ddf200", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "bfba7e508f0613ec8f80e4651fe7d8ae.h", "FileName": "include/openssl/x509.h", "Line": 97, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct x509_cert_aux_st X509_CERT_AUX;", "", "typedef struct x509_cinf_st X509_CINF;", "", "DEFINE_STACK_OF(X509)", "", "/* This is used for a table of trust checking functions */", "", "typedef struct x509_trust_st {"], "SrcStart": 92}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 773, "Tip": "Function <b>sk_X509_value</b> executes and stores the return value to <b>x</b> (<b>x</b> can be null)", "SrcLines": ["     * Note, that depths 0..num_untrusted-1 may also contain trusted", "     * certificates, but the caller is expected to have already checked those,", "     * and wants to incrementally check just any added since.", "     */", "    for (i = num_untrusted; i < num; i++) {", "        x = sk_X509_value(ctx->chain, i);", "        trust = X509_check_trust(x, ctx->param->trust, 0);", "        /* If explicitly trusted return trusted */", "        if (trust == X509_TRUST_TRUSTED)", "            goto trusted;"], "SrcStart": 768}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 774, "Tip": "<b>x</b> is used as the 1st parameter in function <b>X509_check_trust</b> (<b>x</b> can be null)", "SrcLines": ["     * certificates, but the caller is expected to have already checked those,", "     * and wants to incrementally check just any added since.", "     */", "    for (i = num_untrusted; i < num; i++) {", "        x = sk_X509_value(ctx->chain, i);", "        trust = X509_check_trust(x, ctx->param->trust, 0);", "        /* If explicitly trusted return trusted */", "        if (trust == X509_TRUST_TRUSTED)", "            goto trusted;", "        if (trust == X509_TRUST_REJECTED)"], "SrcStart": 769}, {"FileMD5": "9a2453df94fd9cedfc1d79d3b0158ffc.c", "FileName": "crypto/x509/x509_trs.c", "Line": 72, "Tip": "<b>x</b> is used as the 2nd parameter in function <b>obj_trust</b> (<b>x</b> can be null)", "SrcLines": ["    X509_TRUST *pt;", "    int idx;", "", "    /* We get this as a default value */", "    if (id == X509_TRUST_DEFAULT)", "        return obj_trust(NID_anyExtendedKeyUsage, x,", "                         flags | X509_TRUST_DO_SS_COMPAT);", "    idx = X509_TRUST_get_by_id(id);", "    if (idx == -1)", "        return default_trust(id, x, flags);"], "SrcStart": 67}, {"FileMD5": "9a2453df94fd9cedfc1d79d3b0158ffc.c", "FileName": "crypto/x509/x509_trs.c", "Line": 251, "Tip": "Load value from <b>x-&gt;aux</b> and assign to <b>ax</b>", "SrcLines": ["        return X509_TRUST_UNTRUSTED;", "}", "", "static int obj_trust(int id, X509 *x, int flags)", "{", "    X509_CERT_AUX *ax = x->aux;", "    int i;", "", "    if (ax && ax->reject) {", "        for (i = 0; i < sk_ASN1_OBJECT_num(ax->reject); i++) {"], "SrcStart": 246}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509_trs.c", "Line": 251}, {"HashID": "5e4b29c11e9f5a4a2ef0ecb4c1959f2b", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 2947, "Tip": "Store <b>null</b> to <b>xtmp</b>", "SrcLines": ["     */", "    depth = ctx->param->depth + 1;", "", "    while (search != 0) {", "        X509 *x;", "        X509 *xtmp = NULL;", "", "        /*", "         * Look in the trust store if enabled for first lookup, or we've run", "         * out of untrusted issuers and search here is not disabled.  When we"], "SrcStart": 2942}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 3032, "Tip": "Load value from <b>xtmp</b> and assign to <b>x</b>", "SrcLines": ["                /*", "                 * Self-signed untrusted certificates get replaced by their", "                 * trusted matching issuer.  Otherwise, grow the chain.", "                 */", "                if (ss == 0) {", "                    if (!sk_X509_push(ctx->chain, x = xtmp)) {", "                        X509_free(xtmp);", "                        X509err(X509_F_BUILD_CHAIN, ERR_R_MALLOC_FAILURE);", "                        trust = X509_TRUST_REJECTED;", "                        ctx->error = X509_V_ERR_OUT_OF_MEM;"], "SrcStart": 3027}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 3040, "Tip": "<b>x</b> is used as the 1st parameter in function <b>cert_self_signed</b> (<b>x</b> can be null)", "SrcLines": ["                        trust = X509_TRUST_REJECTED;", "                        ctx->error = X509_V_ERR_OUT_OF_MEM;", "                        search = 0;", "                        continue;", "                    }", "                    ss = cert_self_signed(x);", "                } else if (num == ctx->num_untrusted) {", "                    /*", "                     * We have a self-signed certificate that has the same", "                     * subject name (and perhaps keyid and/or serial number) as"], "SrcStart": 3035}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 117, "Tip": "Load value from <b>x-&gt;ex_flags</b>", "SrcLines": ["     * FIXME: x509v3_cache_extensions() needs to detect more failures and not", "     * set EXFLAG_SET when that happens.  Especially, if the failures are", "     * parse errors, rather than memory pressure!", "     */", "    X509_check_purpose(x, -1, 0);", "    if (x->ex_flags & EXFLAG_SS)", "        return 1;", "    else", "        return 0;", "}"], "SrcStart": 112}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509_vfy.c", "Line": 117}, {"HashID": "d8e1ff9ce5d1291577e1125a9dd1248f", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "bfba7e508f0613ec8f80e4651fe7d8ae.h", "FileName": "include/openssl/x509.h", "Line": 97, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct x509_cert_aux_st X509_CERT_AUX;", "", "typedef struct x509_cinf_st X509_CINF;", "", "DEFINE_STACK_OF(X509)", "", "/* This is used for a table of trust checking functions */", "", "typedef struct x509_trust_st {"], "SrcStart": 92}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 587, "Tip": "Function <b>sk_X509_value</b> executes and stores the return value to <b>x</b> (<b>x</b> can be null)", "SrcLines": ["{", "    int i;", "", "    /* Check name constraints for all certificates */", "    for (i = sk_X509_num(ctx->chain) - 1; i >= 0; i--) {", "        X509 *x = sk_X509_value(ctx->chain, i);", "        int j;", "", "        /* Ignore self issued certs unless last in chain */", "        if (i && (x->ex_flags & EXFLAG_SI))"], "SrcStart": 582}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 591, "Tip": "Load value from <b>x-&gt;ex_flags</b>", "SrcLines": ["    for (i = sk_X509_num(ctx->chain) - 1; i >= 0; i--) {", "        X509 *x = sk_X509_value(ctx->chain, i);", "        int j;", "", "        /* Ignore self issued certs unless last in chain */", "        if (i && (x->ex_flags & EXFLAG_SI))", "            continue;", "", "        /*", "         * Proxy certificates policy has an extra constraint, where the"], "SrcStart": 586}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509_vfy.c", "Line": 591}, {"HashID": "0adf5d72cdc160dea6a2686f64e0f45f", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "bfba7e508f0613ec8f80e4651fe7d8ae.h", "FileName": "include/openssl/x509.h", "Line": 97, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct x509_cert_aux_st X509_CERT_AUX;", "", "typedef struct x509_cinf_st X509_CINF;", "", "DEFINE_STACK_OF(X509)", "", "/* This is used for a table of trust checking functions */", "", "typedef struct x509_trust_st {"], "SrcStart": 92}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 587, "Tip": "Function <b>sk_X509_value</b> executes and stores the return value to <b>x</b> (<b>x</b> can be null)", "SrcLines": ["{", "    int i;", "", "    /* Check name constraints for all certificates */", "    for (i = sk_X509_num(ctx->chain) - 1; i >= 0; i--) {", "        X509 *x = sk_X509_value(ctx->chain, i);", "        int j;", "", "        /* Ignore self issued certs unless last in chain */", "        if (i && (x->ex_flags & EXFLAG_SI))"], "SrcStart": 582}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 600, "Tip": "Load value from <b>x-&gt;ex_flags</b>", "SrcLines": ["         * Proxy certificates policy has an extra constraint, where the", "         * certificate subject MUST be the issuer with a single CN entry", "         * added.", "         * (RFC 3820: 3.4, 4.1.3 (a)(4))", "         */", "        if (x->ex_flags & EXFLAG_PROXY) {", "            X509_NAME *tmpsubject = X509_get_subject_name(x);", "            X509_NAME *tmpissuer = X509_get_issuer_name(x);", "            X509_NAME_ENTRY *tmpentry = NULL;", "            int last_object_nid = 0;"], "SrcStart": 595}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509_vfy.c", "Line": 600}, {"HashID": "e79cda0da17d47941c273ee30ac11af4", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "bfba7e508f0613ec8f80e4651fe7d8ae.h", "FileName": "include/openssl/x509.h", "Line": 97, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct x509_cert_aux_st X509_CERT_AUX;", "", "typedef struct x509_cinf_st X509_CINF;", "", "DEFINE_STACK_OF(X509)", "", "/* This is used for a table of trust checking functions */", "", "typedef struct x509_trust_st {"], "SrcStart": 92}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 869, "Tip": "Function <b>sk_X509_value</b> executes and stores the return value to <b>x</b> (<b>x</b> can be null)", "SrcLines": ["static int check_cert(X509_STORE_CTX *ctx)", "{", "    X509_CRL *crl = NULL, *dcrl = NULL;", "    int ok = 0;", "    int cnum = ctx->error_depth;", "    X509 *x = sk_X509_value(ctx->chain, cnum);", "", "    ctx->current_cert = x;", "    ctx->current_issuer = NULL;", "    ctx->current_crl_score = 0;"], "SrcStart": 864}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 876, "Tip": "Load value from <b>x-&gt;ex_flags</b>", "SrcLines": ["    ctx->current_cert = x;", "    ctx->current_issuer = NULL;", "    ctx->current_crl_score = 0;", "    ctx->current_reasons = 0;", "", "    if (x->ex_flags & EXFLAG_PROXY)", "        return 1;", "", "    while (ctx->current_reasons != CRLDP_ALL_REASONS) {", "        unsigned int last_reasons = ctx->current_reasons;"], "SrcStart": 871}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509_vfy.c", "Line": 876}, {"HashID": "2c60ad18816ed38d45a32b0663b03994", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "a8acda810a664c9b0e6d25c1caf509b9.h", "FileName": "include/openssl/x509v3.h", "Line": 446, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["# define X509V3_ADD_REPLACE_EXISTING     3L", "# define X509V3_ADD_KEEP_EXISTING        4L", "# define X509V3_ADD_DELETE               5L", "# define X509V3_ADD_SILENT               0x10", "", "DEFINE_STACK_OF(X509_PURPOSE)", "", "DECLARE_ASN1_FUNCTIONS(BASIC_CONSTRAINTS)", "", "DECLARE_ASN1_FUNCTIONS(SXNET)"], "SrcStart": 441}, {"FileMD5": "275e2a08c0dedb2b56f9f36df0ea0b65.c", "FileName": "crypto/x509v3/v3_purp.c", "Line": 117, "Tip": "Function <b>sk_X509_PURPOSE_value</b> executes and returns", "SrcLines": ["{", "    if (idx < 0)", "        return NULL;", "    if (idx < (int)X509_PURPOSE_COUNT)", "        return xstandard + idx;", "    return sk_X509_PURPOSE_value(xptable, idx - X509_PURPOSE_COUNT);", "}", "", "int X509_PURPOSE_get_by_sname(const char *sname)", "{"], "SrcStart": 112}, {"FileMD5": "275e2a08c0dedb2b56f9f36df0ea0b65.c", "FileName": "crypto/x509v3/v3_purp.c", "Line": 118, "Tip": "Return the return value of function <b>sk_X509_PURPOSE_value</b> to caller (The return value can be null)", "SrcLines": ["    if (idx < 0)", "        return NULL;", "    if (idx < (int)X509_PURPOSE_COUNT)", "        return xstandard + idx;", "    return sk_X509_PURPOSE_value(xptable, idx - X509_PURPOSE_COUNT);", "}", "", "int X509_PURPOSE_get_by_sname(const char *sname)", "{", "    int i;"], "SrcStart": 113}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 2142, "Tip": "Function <b>X509_PURPOSE_get0</b> executes and stores the return value to <b>ptmp</b> (<b>ptmp</b> can be null)", "SrcLines": ["        if (idx == -1) {", "            X509err(X509_F_X509_STORE_CTX_PURPOSE_INHERIT,", "                    X509_R_UNKNOWN_PURPOSE_ID);", "            return 0;", "        }", "        ptmp = X509_PURPOSE_get0(idx);", "        if (ptmp->trust == X509_TRUST_DEFAULT) {", "            idx = X509_PURPOSE_get_by_id(def_purpose);", "            /*", "             * XXX: In the two callers above def_purpose is always 0, which is"], "SrcStart": 2137}, {"FileMD5": "59a9b59273169ca11c8c5ce21773f8c5.c", "FileName": "crypto/x509/x509_vfy.c", "Line": 2143, "Tip": "Load value from <b>ptmp-&gt;trust</b>", "SrcLines": ["            X509err(X509_F_X509_STORE_CTX_PURPOSE_INHERIT,", "                    X509_R_UNKNOWN_PURPOSE_ID);", "            return 0;", "        }", "        ptmp = X509_PURPOSE_get0(idx);", "        if (ptmp->trust == X509_TRUST_DEFAULT) {", "            idx = X509_PURPOSE_get_by_id(def_purpose);", "            /*", "             * XXX: In the two callers above def_purpose is always 0, which is", "             * not a known value, so idx will always be -1.  How is the"], "SrcStart": 2138}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509_vfy.c", "Line": 2143}, {"HashID": "218b743b2fce892ed8d5ae22f07b0e16", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 351, "Tip": "Return <b>null</b> to caller", "SrcLines": ["ASN1_STRING *X509_NAME_ENTRY_get_data(const X509_NAME_ENTRY *ne)", "{", "    if (ne == NULL)", "        return (NULL);", "    return (ne->value);", "}", "", "int X509_NAME_ENTRY_set(const X509_NAME_ENTRY *ne)", "{", "    return ne->set;"], "SrcStart": 346}, {"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 38, "Tip": "Function <b>X509_NAME_ENTRY_get_data</b> executes and stores the return value to <b>data</b> (<b>data</b> can be null)", "SrcLines": ["    const ASN1_STRING *data;", "", "    i = X509_NAME_get_index_by_OBJ(name, obj, -1);", "    if (i < 0)", "        return (-1);", "    data = X509_NAME_ENTRY_get_data(X509_NAME_get_entry(name, i));", "    i = (data->length > (len - 1)) ? (len - 1) : data->length;", "    if (buf == NULL)", "        return (data->length);", "    memcpy(buf, data->data, i);"], "SrcStart": 33}, {"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 39, "Tip": "Load value from <b>data-&gt;length</b>", "SrcLines": ["", "    i = X509_NAME_get_index_by_OBJ(name, obj, -1);", "    if (i < 0)", "        return (-1);", "    data = X509_NAME_ENTRY_get_data(X509_NAME_get_entry(name, i));", "    i = (data->length > (len - 1)) ? (len - 1) : data->length;", "    if (buf == NULL)", "        return (data->length);", "    memcpy(buf, data->data, i);", "    buf[i] = '\u00a50';"], "SrcStart": 34}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509name.c", "Line": 39}, {"HashID": "5b16b12b3c8d00421573327f547fcf7b", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "bfba7e508f0613ec8f80e4651fe7d8ae.h", "FileName": "include/openssl/x509.h", "Line": 73, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct X509_sig_st X509_SIG;", "", "typedef struct X509_name_entry_st X509_NAME_ENTRY;", "", "DEFINE_STACK_OF(X509_NAME_ENTRY)", "", "DEFINE_STACK_OF(X509_NAME)", "", "# define X509_EX_V_NETSCAPE_HACK         0x8000"], "SrcStart": 68}, {"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 78, "Tip": "Function <b>sk_X509_NAME_ENTRY_value</b> executes and stores the return value to <b>ne</b> (<b>ne</b> can be null)", "SrcLines": ["    if (lastpos < 0)", "        lastpos = -1;", "    sk = name->entries;", "    n = sk_X509_NAME_ENTRY_num(sk);", "    for (lastpos++; lastpos < n; lastpos++) {", "        ne = sk_X509_NAME_ENTRY_value(sk, lastpos);", "        if (OBJ_cmp(ne->object, obj) == 0)", "            return (lastpos);", "    }", "    return (-1);"], "SrcStart": 73}, {"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 79, "Tip": "Load value from <b>ne-&gt;object</b>", "SrcLines": ["        lastpos = -1;", "    sk = name->entries;", "    n = sk_X509_NAME_ENTRY_num(sk);", "    for (lastpos++; lastpos < n; lastpos++) {", "        ne = sk_X509_NAME_ENTRY_value(sk, lastpos);", "        if (OBJ_cmp(ne->object, obj) == 0)", "            return (lastpos);", "    }", "    return (-1);", "}"], "SrcStart": 74}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509name.c", "Line": 79}, {"HashID": "cb0b41cf6e21f6acaa0a2790be1d1acf", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "bfba7e508f0613ec8f80e4651fe7d8ae.h", "FileName": "include/openssl/x509.h", "Line": 73, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct X509_sig_st X509_SIG;", "", "typedef struct X509_name_entry_st X509_NAME_ENTRY;", "", "DEFINE_STACK_OF(X509_NAME_ENTRY)", "", "DEFINE_STACK_OF(X509_NAME)", "", "# define X509_EX_V_NETSCAPE_HACK         0x8000"], "SrcStart": 68}, {"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 202, "Tip": "Function <b>sk_X509_NAME_ENTRY_value</b> executes and returns", "SrcLines": ["    if (set == -1) {", "        if (loc == 0) {", "            set = 0;", "            inc = 1;", "        } else {", "            set = sk_X509_NAME_ENTRY_value(sk, loc - 1)->set;", "        }", "    } else {                    /* if (set >= 0) */", "", "        if (loc >= n) {"], "SrcStart": 197}, {"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 202, "Tip": "Load value from <b>sk_X509_NAME_ENTRY_value(sk,loc-1)-&gt;set</b> and assign to <b>set</b>", "SrcLines": ["    if (set == -1) {", "        if (loc == 0) {", "            set = 0;", "            inc = 1;", "        } else {", "            set = sk_X509_NAME_ENTRY_value(sk, loc - 1)->set;", "        }", "    } else {                    /* if (set >= 0) */", "", "        if (loc >= n) {"], "SrcStart": 197}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509name.c", "Line": 202}, {"HashID": "7d275593a1fb1dd55028fbfab746afd5", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "ca1bcbeb340dcd3309559e910e85ed73.c", "FileName": "crypto/stack/stack.c", "Line": 289, "Tip": "Return <b>null</b> to caller", "SrcLines": ["void *OPENSSL_sk_value(const OPENSSL_STACK *st, int i)", "{", "    if (st == NULL || i < 0 || i >= st->num)", "        return NULL;", "    return (void *)st->data[i];", "}", "", "void *OPENSSL_sk_set(OPENSSL_STACK *st, int i, const void *data)", "{", "    if (st == NULL || i < 0 || i >= st->num)"], "SrcStart": 284}, {"FileMD5": "bfba7e508f0613ec8f80e4651fe7d8ae.h", "FileName": "include/openssl/x509.h", "Line": 73, "Tip": "Return the return value of function <b>OPENSSL_sk_value</b> to caller", "SrcLines": ["", "typedef struct X509_sig_st X509_SIG;", "", "typedef struct X509_name_entry_st X509_NAME_ENTRY;", "", "DEFINE_STACK_OF(X509_NAME_ENTRY)", "", "DEFINE_STACK_OF(X509_NAME)", "", "# define X509_EX_V_NETSCAPE_HACK         0x8000"], "SrcStart": 68}, {"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 208, "Tip": "Function <b>sk_X509_NAME_ENTRY_value</b> executes and returns", "SrcLines": ["        }", "    } else {                    /* if (set >= 0) */", "", "        if (loc >= n) {", "            if (loc != 0)", "                set = sk_X509_NAME_ENTRY_value(sk, loc - 1)->set + 1;", "            else", "                set = 0;", "        } else", "            set = sk_X509_NAME_ENTRY_value(sk, loc)->set;"], "SrcStart": 203}, {"FileMD5": "4ddf5a7d24a35418334876e0a621eeae.c", "FileName": "crypto/x509/x509name.c", "Line": 208, "Tip": "Load value from <b>sk_X509_NAME_ENTRY_value(sk,loc-1)-&gt;set</b>", "SrcLines": ["        }", "    } else {                    /* if (set >= 0) */", "", "        if (loc >= n) {", "            if (loc != 0)", "                set = sk_X509_NAME_ENTRY_value(sk, loc - 1)->set + 1;", "            else", "                set = 0;", "        } else", "            set = sk_X509_NAME_ENTRY_value(sk, loc)->set;"], "SrcStart": 203}], "Review": 80, "Time": 1630075188000, "DocID": "PE0001", "File": "crypto/x509/x509name.c", "Line": 208}]}, "start": 61, "end": 70, "page": 8, "total_pages": 11, "language": "en"}