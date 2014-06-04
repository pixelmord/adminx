<?php
/**
 * @file
 * Main page template.
 */
?>

<header id="branding" class="page-header">
  <div class="header-inner">
    <?php print render($title_prefix); ?>

    <div class="breadcrumb">
      <?php print $breadcrumb; ?>
      <?php if ($title): ?>
        <span class="current"><?php print $title; ?></span>
      <?php endif; ?>
    </div>

    <?php print render($title_suffix); ?>

    <?php print render($primary_local_tasks); ?>

    <?php if ($site_name || $logo): ?>
      <div id="corporate-identity">
        <?php if ($site_name): ?>
          <div id="site-name"><?php print $site_name; ?></div>
        <?php endif; ?>
        <?php if ($logo): ?>
          <div id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Logo'); ?>" /></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>

  </div>
</header>

<div class="page">
  <?php if ($secondary_local_tasks): ?>
    <?php print render($secondary_local_tasks); ?>
  <?php endif; ?>

  <div id="content">
    <div class="element-invisible"><a id="main-content"></a></div>

    <?php if ($messages): ?>
      <div id="console"><?php print $messages; ?></div>
    <?php endif; ?>

    <?php if ($page['help']): ?>
      <div id="help">
        <?php print render($page['help']); ?>
      </div>
    <?php endif; ?>

    <?php if ($page['content_before']): ?>
      <div id="content-before">
        <?php print render($page['content_before']); ?>
      </div>
    <?php endif; ?>

    <?php if ($action_links): ?>
      <ul class="action-links"><?php print render($action_links); ?></ul>
    <?php endif; ?>

    <?php print render($page['content']['system_main']); ?>

    <?php if ($page['content_after']): ?>
      <div id="content-after">
        <?php print render($page['content_after']); ?>
      </div>
    <?php endif; ?>

  </div>

</div>
