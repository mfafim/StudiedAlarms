var data = {"bug_cases": {"BugType": "NULL pointer dereference", "Severity": 12, "CaseList": [{"HashID": "812c9c2330aae2e61374890111dfc80f", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "b04b416d62a4b97067b43a02eb25c02b.h", "FileName": "libavfilter/bufferqueue.h", "Line": 90, "Tip": "Return <b>null</b> to caller", "SrcLines": [" * Return NULL if the queue has not enough buffers.", " */", "static inline AVFrame *ff_bufqueue_peek(struct FFBufQueue *queue,", "                                        unsigned index)", "{", "    return index < queue->available ? BUCKET(index) : NULL;", "}", "", "/**", " * Get the first buffer from the queue and remove it."], "SrcStart": 85}, {"FileMD5": "fca10b2971b20f9028312c4467aff067.c", "FileName": "libavcodec/opusenc.c", "Line": 137, "Tip": "Store the return value of function <b>ff_bufqueue_peek</b> to <b>cur</b>", "SrcLines": ["", "    for (int sf = 0; sf < subframes; sf++) {", "        if (sf != (subframes - 1))", "            cur = ff_bufqueue_get(&s->bufqueue);", "        else", "            cur = ff_bufqueue_peek(&s->bufqueue, 0);", "", "        for (int ch = 0; ch < f->channels; ch++) {", "            CeltBlock *b = &f->block[ch];", "            const void *input = cur->extended_data[ch];"], "SrcStart": 132}, {"FileMD5": "fca10b2971b20f9028312c4467aff067.c", "FileName": "libavcodec/opusenc.c", "Line": 144, "Tip": "Load value from <b>cur</b>", "SrcLines": ["        for (int ch = 0; ch < f->channels; ch++) {", "            CeltBlock *b = &f->block[ch];", "            const void *input = cur->extended_data[ch];", "            const size_t bps  = av_get_bytes_per_sample(cur->format);", "            const size_t left = (subframesize - cur->nb_samples)*bps;", "            const size_t len  = FFMIN(subframesize, cur->nb_samples)*bps;", "            memcpy(&b->samples[sf*subframesize], input, len);", "            memset(&b->samples[cur->nb_samples], 0, left);", "        }", ""], "SrcStart": 139}, {"FileMD5": "fca10b2971b20f9028312c4467aff067.c", "FileName": "libavcodec/opusenc.c", "Line": 144, "Tip": "Load value from <b>cur-&gt;nb_samples</b>", "SrcLines": ["        for (int ch = 0; ch < f->channels; ch++) {", "            CeltBlock *b = &f->block[ch];", "            const void *input = cur->extended_data[ch];", "            const size_t bps  = av_get_bytes_per_sample(cur->format);", "            const size_t left = (subframesize - cur->nb_samples)*bps;", "            const size_t len  = FFMIN(subframesize, cur->nb_samples)*bps;", "            memcpy(&b->samples[sf*subframesize], input, len);", "            memset(&b->samples[cur->nb_samples], 0, left);", "        }", ""], "SrcStart": 139}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavcodec/opusenc.c", "Line": 144}, {"HashID": "62e1e1e0846f35fd93f8939e57527179", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "b04b416d62a4b97067b43a02eb25c02b.h", "FileName": "libavfilter/bufferqueue.h", "Line": 90, "Tip": "Return <b>null</b> to caller", "SrcLines": [" * Return NULL if the queue has not enough buffers.", " */", "static inline AVFrame *ff_bufqueue_peek(struct FFBufQueue *queue,", "                                        unsigned index)", "{", "    return index < queue->available ? BUCKET(index) : NULL;", "}", "", "/**", " * Get the first buffer from the queue and remove it."], "SrcStart": 85}, {"FileMD5": "fca10b2971b20f9028312c4467aff067.c", "FileName": "libavcodec/opusenc.c", "Line": 137, "Tip": "Store the return value of function <b>ff_bufqueue_peek</b> to <b>cur</b>", "SrcLines": ["", "    for (int sf = 0; sf < subframes; sf++) {", "        if (sf != (subframes - 1))", "            cur = ff_bufqueue_get(&s->bufqueue);", "        else", "            cur = ff_bufqueue_peek(&s->bufqueue, 0);", "", "        for (int ch = 0; ch < f->channels; ch++) {", "            CeltBlock *b = &f->block[ch];", "            const void *input = cur->extended_data[ch];"], "SrcStart": 132}, {"FileMD5": "fca10b2971b20f9028312c4467aff067.c", "FileName": "libavcodec/opusenc.c", "Line": 146, "Tip": "Load value from <b>cur</b>", "SrcLines": ["            const void *input = cur->extended_data[ch];", "            const size_t bps  = av_get_bytes_per_sample(cur->format);", "            const size_t left = (subframesize - cur->nb_samples)*bps;", "            const size_t len  = FFMIN(subframesize, cur->nb_samples)*bps;", "            memcpy(&b->samples[sf*subframesize], input, len);", "            memset(&b->samples[cur->nb_samples], 0, left);", "        }", "", "        /* Last frame isn't popped off and freed yet - we need it for overlap */", "        if (sf != (subframes - 1))"], "SrcStart": 141}, {"FileMD5": "fca10b2971b20f9028312c4467aff067.c", "FileName": "libavcodec/opusenc.c", "Line": 146, "Tip": "Load value from <b>cur-&gt;nb_samples</b>", "SrcLines": ["            const void *input = cur->extended_data[ch];", "            const size_t bps  = av_get_bytes_per_sample(cur->format);", "            const size_t left = (subframesize - cur->nb_samples)*bps;", "            const size_t len  = FFMIN(subframesize, cur->nb_samples)*bps;", "            memcpy(&b->samples[sf*subframesize], input, len);", "            memset(&b->samples[cur->nb_samples], 0, left);", "        }", "", "        /* Last frame isn't popped off and freed yet - we need it for overlap */", "        if (sf != (subframes - 1))"], "SrcStart": 141}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavcodec/opusenc.c", "Line": 146}, {"HashID": "373499e9e3ba39e77115285da1b54f07", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "787f297f8bb036cbc931dfb531295845.c", "FileName": "libavfilter/af_afade.c", "Line": 449, "Tip": "Store <b>null</b> to <b>in</b>", "SrcLines": ["", "static int activate(AVFilterContext *ctx)", "{", "    AudioFadeContext *s   = ctx->priv;", "    AVFilterLink *outlink = ctx->outputs[0];", "    AVFrame *in = NULL, *out, *cf[2] = { NULL };", "    int ret = 0, nb_samples, status;", "    int64_t pts;", "", "    FF_FILTER_FORWARD_STATUS_BACK_ALL(outlink, ctx);"], "SrcStart": 444}, {"FileMD5": "787f297f8bb036cbc931dfb531295845.c", "FileName": "libavfilter/af_afade.c", "Line": 483, "Tip": "Load value from <b>in</b>", "SrcLines": ["            ret = ff_inlink_consume_samples(ctx->inputs[0], nb_samples, nb_samples, &in);", "            if (ret < 0) {", "                return ret;", "            }", "        }", "        in->pts = s->pts;", "        s->pts += av_rescale_q(in->nb_samples,", "            (AVRational){ 1, outlink->sample_rate }, outlink->time_base);", "        return ff_filter_frame(outlink, in);", "    } else if (ff_inlink_queued_samples(ctx->inputs[0]) >= s->nb_samples &&"], "SrcStart": 478}, {"FileMD5": "787f297f8bb036cbc931dfb531295845.c", "FileName": "libavfilter/af_afade.c", "Line": 483, "Tip": "Store <b>s-&gt;pts10</b> to <b>in-&gt;pts</b>", "SrcLines": ["            ret = ff_inlink_consume_samples(ctx->inputs[0], nb_samples, nb_samples, &in);", "            if (ret < 0) {", "                return ret;", "            }", "        }", "        in->pts = s->pts;", "        s->pts += av_rescale_q(in->nb_samples,", "            (AVRational){ 1, outlink->sample_rate }, outlink->time_base);", "        return ff_filter_frame(outlink, in);", "    } else if (ff_inlink_queued_samples(ctx->inputs[0]) >= s->nb_samples &&"], "SrcStart": 478}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavfilter/af_afade.c", "Line": 483}, {"HashID": "b688f417c1d996e0888b52c823bd3520", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "787f297f8bb036cbc931dfb531295845.c", "FileName": "libavfilter/af_afade.c", "Line": 449, "Tip": "Store <b>null</b> to <b>in</b>", "SrcLines": ["", "static int activate(AVFilterContext *ctx)", "{", "    AudioFadeContext *s   = ctx->priv;", "    AVFilterLink *outlink = ctx->outputs[0];", "    AVFrame *in = NULL, *out, *cf[2] = { NULL };", "    int ret = 0, nb_samples, status;", "    int64_t pts;", "", "    FF_FILTER_FORWARD_STATUS_BACK_ALL(outlink, ctx);"], "SrcStart": 444}, {"FileMD5": "787f297f8bb036cbc931dfb531295845.c", "FileName": "libavfilter/af_afade.c", "Line": 484, "Tip": "Load value from <b>in</b>", "SrcLines": ["            if (ret < 0) {", "                return ret;", "            }", "        }", "        in->pts = s->pts;", "        s->pts += av_rescale_q(in->nb_samples,", "            (AVRational){ 1, outlink->sample_rate }, outlink->time_base);", "        return ff_filter_frame(outlink, in);", "    } else if (ff_inlink_queued_samples(ctx->inputs[0]) >= s->nb_samples &&", "               ff_inlink_queued_samples(ctx->inputs[1]) >= s->nb_samples && s->cf0_eof) {"], "SrcStart": 479}, {"FileMD5": "787f297f8bb036cbc931dfb531295845.c", "FileName": "libavfilter/af_afade.c", "Line": 484, "Tip": "Load value from <b>in-&gt;nb_samples</b>", "SrcLines": ["            if (ret < 0) {", "                return ret;", "            }", "        }", "        in->pts = s->pts;", "        s->pts += av_rescale_q(in->nb_samples,", "            (AVRational){ 1, outlink->sample_rate }, outlink->time_base);", "        return ff_filter_frame(outlink, in);", "    } else if (ff_inlink_queued_samples(ctx->inputs[0]) >= s->nb_samples &&", "               ff_inlink_queued_samples(ctx->inputs[1]) >= s->nb_samples && s->cf0_eof) {"], "SrcStart": 479}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavfilter/af_afade.c", "Line": 484}, {"HashID": "fc2e565f54c92af138db630193f79ea6", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 399, "Tip": "Store <b>null</b> to <b>fft_in_l</b>", "SrcLines": ["    int nb_irs = s->nb_irs;", "    int nb_input_channels = ctx->inputs[0]->channels;", "    float gain_lin = expf((s->gain - 3 * nb_input_channels) / 20 * M_LN10);", "    FFTComplex *data_hrtf_l = NULL;", "    FFTComplex *data_hrtf_r = NULL;", "    FFTComplex *fft_in_l = NULL;", "    FFTComplex *fft_in_r = NULL;", "    float *data_ir_l = NULL;", "    float *data_ir_r = NULL;", "    int offset = 0, ret = 0;"], "SrcStart": 394}, {"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 516, "Tip": "<b>fft_in_l</b> is used as the 1st parameter in function <b>memset</b> (<b>fft_in_l</b> can be null)", "SrcLines": ["                for (j = 0; j < len; j++) {", "                    data_ir_l[offset + j] = ptr[len * 2 - j * 2 - 2] * gain_lin;", "                    data_ir_r[offset + j] = ptr[len * 2 - j * 2 - 1] * gain_lin;", "                }", "            } else {", "                memset(fft_in_l, 0, n_fft * sizeof(*fft_in_l));", "                memset(fft_in_r, 0, n_fft * sizeof(*fft_in_r));", "", "                offset = idx * n_fft;", "                for (j = 0; j < len; j++) {"], "SrcStart": 511}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavfilter/af_headphone.c", "Line": 516}, {"HashID": "a941824492227ab3d87eeede28bb06e1", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 400, "Tip": "Store <b>null</b> to <b>fft_in_r</b>", "SrcLines": ["    int nb_input_channels = ctx->inputs[0]->channels;", "    float gain_lin = expf((s->gain - 3 * nb_input_channels) / 20 * M_LN10);", "    FFTComplex *data_hrtf_l = NULL;", "    FFTComplex *data_hrtf_r = NULL;", "    FFTComplex *fft_in_l = NULL;", "    FFTComplex *fft_in_r = NULL;", "    float *data_ir_l = NULL;", "    float *data_ir_r = NULL;", "    int offset = 0, ret = 0;", "    int n_fft;"], "SrcStart": 395}, {"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 522, "Tip": "Load value from <b>fft_in_r</b>", "SrcLines": ["                memset(fft_in_r, 0, n_fft * sizeof(*fft_in_r));", "", "                offset = idx * n_fft;", "                for (j = 0; j < len; j++) {", "                    fft_in_l[delay_l + j].re = ptr[j * 2    ] * gain_lin;", "                    fft_in_r[delay_r + j].re = ptr[j * 2 + 1] * gain_lin;", "                }", "", "                av_fft_permute(s->fft[0], fft_in_l);", "                av_fft_calc(s->fft[0], fft_in_l);"], "SrcStart": 517}, {"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 522, "Tip": "Store <b>ptr[(i*2)+1]*gain_lin</b> to <b>fft_in_r[delay_r+i].re</b>", "SrcLines": ["                memset(fft_in_r, 0, n_fft * sizeof(*fft_in_r));", "", "                offset = idx * n_fft;", "                for (j = 0; j < len; j++) {", "                    fft_in_l[delay_l + j].re = ptr[j * 2    ] * gain_lin;", "                    fft_in_r[delay_r + j].re = ptr[j * 2 + 1] * gain_lin;", "                }", "", "                av_fft_permute(s->fft[0], fft_in_l);", "                av_fft_calc(s->fft[0], fft_in_l);"], "SrcStart": 517}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavfilter/af_headphone.c", "Line": 522}, {"HashID": "a298f4ad733600563502c9d9aefa1c59", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 400, "Tip": "Store <b>null</b> to <b>fft_in_r</b>", "SrcLines": ["    int nb_input_channels = ctx->inputs[0]->channels;", "    float gain_lin = expf((s->gain - 3 * nb_input_channels) / 20 * M_LN10);", "    FFTComplex *data_hrtf_l = NULL;", "    FFTComplex *data_hrtf_r = NULL;", "    FFTComplex *fft_in_l = NULL;", "    FFTComplex *fft_in_r = NULL;", "    float *data_ir_l = NULL;", "    float *data_ir_r = NULL;", "    int offset = 0, ret = 0;", "    int n_fft;"], "SrcStart": 395}, {"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 560, "Tip": "<b>fft_in_r</b> is used as the 1st parameter in function <b>memset</b> (<b>fft_in_r</b> can be null)", "SrcLines": ["                        data_ir_l[offset + j] = ptr[len * N - j * N - N + I    ] * gain_lin;", "                        data_ir_r[offset + j] = ptr[len * N - j * N - N + I + 1] * gain_lin;", "                    }", "                } else {", "                    memset(fft_in_l, 0, n_fft * sizeof(*fft_in_l));", "                    memset(fft_in_r, 0, n_fft * sizeof(*fft_in_r));", "", "                    offset = idx * n_fft;", "                    for (j = 0; j < len; j++) {", "                        fft_in_l[delay_l + j].re = ptr[j * N + I    ] * gain_lin;"], "SrcStart": 555}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavfilter/af_headphone.c", "Line": 560}, {"HashID": "2e50803d3451ffff91eb8809934c85e0", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 397, "Tip": "Store <b>null</b> to <b>data_hrtf_l</b>", "SrcLines": ["    struct HeadphoneContext *s = ctx->priv;", "    const int ir_len = s->ir_len;", "    int nb_irs = s->nb_irs;", "    int nb_input_channels = ctx->inputs[0]->channels;", "    float gain_lin = expf((s->gain - 3 * nb_input_channels) / 20 * M_LN10);", "    FFTComplex *data_hrtf_l = NULL;", "    FFTComplex *data_hrtf_r = NULL;", "    FFTComplex *fft_in_l = NULL;", "    FFTComplex *fft_in_r = NULL;", "    float *data_ir_l = NULL;"], "SrcStart": 392}, {"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 570, "Tip": "Copy data to <b>&amp;(data_hrtf_l[offset])</b> (<b>&amp;(data_hrtf_l[offset])</b> can be null)", "SrcLines": ["                        fft_in_r[delay_r + j].re = ptr[j * N + I + 1] * gain_lin;", "                    }", "", "                    av_fft_permute(s->fft[0], fft_in_l);", "                    av_fft_calc(s->fft[0], fft_in_l);", "                    memcpy(data_hrtf_l + offset, fft_in_l, n_fft * sizeof(*fft_in_l));", "                    av_fft_permute(s->fft[0], fft_in_r);", "                    av_fft_calc(s->fft[0], fft_in_r);", "                    memcpy(data_hrtf_r + offset, fft_in_r, n_fft * sizeof(*fft_in_r));", "                }"], "SrcStart": 565}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavfilter/af_headphone.c", "Line": 570}, {"HashID": "733cc10d4a4dee9697275e7b4a816baf", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 400, "Tip": "Store <b>null</b> to <b>fft_in_r</b>", "SrcLines": ["    int nb_input_channels = ctx->inputs[0]->channels;", "    float gain_lin = expf((s->gain - 3 * nb_input_channels) / 20 * M_LN10);", "    FFTComplex *data_hrtf_l = NULL;", "    FFTComplex *data_hrtf_r = NULL;", "    FFTComplex *fft_in_l = NULL;", "    FFTComplex *fft_in_r = NULL;", "    float *data_ir_l = NULL;", "    float *data_ir_r = NULL;", "    int offset = 0, ret = 0;", "    int n_fft;"], "SrcStart": 395}, {"FileMD5": "c289de0cce52bacd078a2f2c419300b7.c", "FileName": "libavfilter/af_headphone.c", "Line": 573, "Tip": "Copy data from <b>fft_in_r</b> (<b>fft_in_r</b> can be null)", "SrcLines": ["                    av_fft_permute(s->fft[0], fft_in_l);", "                    av_fft_calc(s->fft[0], fft_in_l);", "                    memcpy(data_hrtf_l + offset, fft_in_l, n_fft * sizeof(*fft_in_l));", "                    av_fft_permute(s->fft[0], fft_in_r);", "                    av_fft_calc(s->fft[0], fft_in_r);", "                    memcpy(data_hrtf_r + offset, fft_in_r, n_fft * sizeof(*fft_in_r));", "                }", "            }", "        }", ""], "SrcStart": 568}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavfilter/af_headphone.c", "Line": 573}, {"HashID": "558e30069eb6e52deb24c937fb18cfd2", "ReportChecker": "PSA NULL Pointer Dereference Checker", "Score": 60, "Steps": [{"FileMD5": "40d67385f90d3439a9d7b3b6032e7c5a.c", "FileName": "libavfilter/avfilter.c", "Line": 1502, "Tip": "Store <b>null</b> to <b>rframe</b>", "SrcLines": ["{", "    AVFrame *frame;", "    int ret;", "", "    av_assert1(min);", "    *rframe = NULL;", "    if (!ff_inlink_check_available_samples(link, min))", "        return 0;", "    if (link->status_in)", "        min = FFMIN(min, ff_framequeue_queued_samples(&link->fifo));"], "SrcStart": 1497}, {"FileMD5": "40d67385f90d3439a9d7b3b6032e7c5a.c", "FileName": "libavfilter/avfilter.c", "Line": 1497, "Tip": "Program reaches the return point, modifying the value <b>*(rframe)</b> to null", "SrcLines": ["    return 1;", "}", "", "int ff_inlink_consume_samples(AVFilterLink *link, unsigned min, unsigned max,", "                            AVFrame **rframe)", "{", "    AVFrame *frame;", "    int ret;", "", "    av_assert1(min);"], "SrcStart": 1492}, {"FileMD5": "40d67385f90d3439a9d7b3b6032e7c5a.c", "FileName": "libavfilter/avfilter.c", "Line": 1486, "Tip": "Function <b>ff_inlink_consume_samples</b> modifies the value <b>*(rframe)</b> to null, where <b>rframe</b> is used as the 4th parameter (<b>rframe</b>)", "SrcLines": ["    if (!ff_inlink_check_available_frame(link))", "        return 0;", "", "    if (link->fifo.samples_skipped) {", "        frame = ff_framequeue_peek(&link->fifo, 0);", "        return ff_inlink_consume_samples(link, frame->nb_samples, frame->nb_samples, rframe);", "    }", "", "    frame = ff_framequeue_take(&link->fifo);", "    consume_update(link, frame);"], "SrcStart": 1481}, {"FileMD5": "40d67385f90d3439a9d7b3b6032e7c5a.c", "FileName": "libavfilter/avfilter.c", "Line": 1477, "Tip": "Program reaches the return point, modifying the value <b>*(rframe)</b> to null", "SrcLines": ["    link->dst->is_disabled = !ff_inlink_evaluate_timeline_at_frame(link, frame);", "    link->frame_count_out++;", "}", "", "int ff_inlink_consume_frame(AVFilterLink *link, AVFrame **rframe)", "{", "    AVFrame *frame;", "", "    *rframe = NULL;", "    if (!ff_inlink_check_available_frame(link))"], "SrcStart": 1472}, {"FileMD5": "7122abe17da9cc5708c0f2eabdd69fe7.c", "FileName": "libavfilter/vf_xfade.c", "Line": 1524, "Tip": "Function <b>ff_inlink_consume_frame</b> modifies the value <b>in</b> to null, where <b>&amp;(in)</b> is used as the 2nd parameter (<b>rframe</b>)", "SrcLines": ["            }", "            s->pts = s->xf[0]->pts;", "            if (s->first_pts + s->offset_pts > s->xf[0]->pts) {", "                s->xf[0] = NULL;", "                s->need_second = 0;", "                ff_inlink_consume_frame(ctx->inputs[0], &in);", "                return ff_filter_frame(outlink, in);", "            }", "", "            s->need_second = 1;"], "SrcStart": 1519}, {"FileMD5": "7122abe17da9cc5708c0f2eabdd69fe7.c", "FileName": "libavfilter/vf_xfade.c", "Line": 1525, "Tip": "<b>in</b> is used as the 2nd parameter in function <b>ff_filter_frame</b> (<b>in</b> can be null)", "SrcLines": ["            s->pts = s->xf[0]->pts;", "            if (s->first_pts + s->offset_pts > s->xf[0]->pts) {", "                s->xf[0] = NULL;", "                s->need_second = 0;", "                ff_inlink_consume_frame(ctx->inputs[0], &in);", "                return ff_filter_frame(outlink, in);", "            }", "", "            s->need_second = 1;", "        }"], "SrcStart": 1520}, {"FileMD5": "40d67385f90d3439a9d7b3b6032e7c5a.c", "FileName": "libavfilter/avfilter.c", "Line": 1078, "Tip": "<b>frame</b> is used as the 2nd parameter in function <b>ff_tlog_ref</b> (<b>frame</b> can be null)", "SrcLines": ["}", "", "int ff_filter_frame(AVFilterLink *link, AVFrame *frame)", "{", "    int ret;", "    FF_TPRINTF_START(NULL, filter_frame); ff_tlog_link(NULL, link, 1); ff_tlog(NULL, \" \"); ff_tlog_ref(NULL, frame, 1);", "", "    /* Consistency checks */", "    if (link->type == AVMEDIA_TYPE_VIDEO) {", "        if (strcmp(link->dst->filter->name, \"buffersink\") &&"], "SrcStart": 1073}, {"FileMD5": "40d67385f90d3439a9d7b3b6032e7c5a.c", "FileName": "libavfilter/avfilter.c", "Line": 58, "Tip": "Load value from <b>ref-&gt;width</b>", "SrcLines": ["            \"ref[%p buf:%p data:%p linesize[%d, %d, %d, %d] pts:%\"PRId64\" pos:%\"PRId64,", "            ref, ref->buf, ref->data[0],", "            ref->linesize[0], ref->linesize[1], ref->linesize[2], ref->linesize[3],", "            ref->pts, ref->pkt_pos);", "", "    if (ref->width) {", "        ff_tlog(ctx, \" a:%d/%d s:%dx%d i:%c iskey:%d type:%c\",", "                ref->sample_aspect_ratio.num, ref->sample_aspect_ratio.den,", "                ref->width, ref->height,", "                !ref->interlaced_frame     ? 'P' :         /* Progressive  */"], "SrcStart": 53}], "Review": 80, "Time": 1629218470000, "DocID": "PE0001", "File": "libavfilter/avfilter.c", "Line": 58}]}, "start": 31, "end": 40, "page": 5, "total_pages": 9, "language": "en"}