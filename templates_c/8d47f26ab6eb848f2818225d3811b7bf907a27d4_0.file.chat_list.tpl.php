<?php
/* Smarty version 3.1.29, created on 2020-07-02 13:37:02
  from "/home/stats/chameleon/templates/chat_list.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.29',
  'unifunc' => 'content_5efdc6de76fb01_24681594',
  'file_dependency' => 
  array (
    '8d47f26ab6eb848f2818225d3811b7bf907a27d4' => 
    array (
      0 => '/home/stats/chameleon/templates/chat_list.tpl',
      1 => 1592128661,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5efdc6de76fb01_24681594 ($_smarty_tpl) {
?>

<?php echo '<script'; ?>
>
    $(document).ready(function() {
        $('input[type="checkbox"]').bootstrapSwitch();
        $('input').tooltip({placement:'auto',animation:true});
        $('label').tooltip({placement:'auto',animation:true});
        $("#myTab a").click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        });
    });



<?php echo '</script'; ?>
>

<?php if (isset($_smarty_tpl->tpl_vars['god']->value)) {?>

<?php echo '<script'; ?>
>
		$(document).ready(function() {
				$('#data-table3').DataTable( {
					"language": {
						"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Dutch.json"
					},
					"pageLength" : 25,
					"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Alles"]],
					"order": [[ 6, "desc" ]]
				} );
	
		} );
		<?php echo '</script'; ?>
>

<?php } else { ?>

<?php echo '<script'; ?>
>
		$(document).ready(function() {
				$('#data-table3').DataTable( {
					"language": {
						"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Dutch.json"
					},
					"pageLength" : 25,
					"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Alles"]],
					
				} );
	
		} );
		<?php echo '</script'; ?>
>

<?php }?>
<div class="datacontainer" id="data">
    <?php ob_start();
echo count($_smarty_tpl->tpl_vars['ids']->value);
$_tmp1=ob_get_clean();
if ($_tmp1 > 0) {?>
    <table id="data-table3" class="table table-hover">
	<thead>
        <tr>
            <td><strong>ID</strong></td><td><strong>Achtergrond</strong></td><td><strong>Naam</strong></td><?php if (isset($_smarty_tpl->tpl_vars['god']->value)) {?><td><strong>Eigenaar</strong></td><td><strong>Speler</strong></td><td><strong>Aantal keer bezocht</strong></td><td><strong>Laatst bezocht</strong></td><?php }?><td><strong>Acties</strong></td>
        </tr>
	</thead><tbody>

        <?php
$__section_chat_0_saved = isset($_smarty_tpl->tpl_vars['__smarty_section_chat']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat'] : false;
$__section_chat_0_loop = (is_array(@$_loop=$_smarty_tpl->tpl_vars['ids']->value) ? count($_loop) : max(0, (int) $_loop));
$__section_chat_0_total = $__section_chat_0_loop;
$_smarty_tpl->tpl_vars['__smarty_section_chat'] = new Smarty_Variable(array());
if ($__section_chat_0_total != 0) {
for ($__section_chat_0_iteration = 1, $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] = 0; $__section_chat_0_iteration <= $__section_chat_0_total; $__section_chat_0_iteration++, $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']++){
?>
         
			<tr>
                <td style="vertical-align:middle"><span class="badge"><?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
</span></td>
				<td style="vertical-align:middle"><?php if ($_smarty_tpl->tpl_vars['bgurl']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)] != '') {?><img src="<?php echo $_smarty_tpl->tpl_vars['bgurl']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
" style="border-radius: 50% 50% 50% 50%;height:50px;width:50px;"><?php } else {
echo $_smarty_tpl->tpl_vars['chatstyle']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];
}?></td>
				<td style="vertical-align:middle"><?php echo $_smarty_tpl->tpl_vars['names']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
</td>
				<?php if (isset($_smarty_tpl->tpl_vars['god']->value)) {?>
				<td style="vertical-align:middle"><?php echo $_smarty_tpl->tpl_vars['owners']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
</td>
				<td style="vertical-align:middle"><?php echo $_smarty_tpl->tpl_vars['playerstyle']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
</td>
				<td style="vertical-align:middle"><?php echo $_smarty_tpl->tpl_vars['calls']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
</td>
				<td style="vertical-align:middle" data-order="<?php echo $_smarty_tpl->tpl_vars['lastcalleds']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
"><?php echo $_smarty_tpl->tpl_vars['lastcalleds']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
</td>
				<?php }?>
                <td style="vertical-align:middle">
                    <a href="<?php echo $_smarty_tpl->tpl_vars['fullurl']->value;?>
/chat.php?id=<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
" target='_blank' class="btn btn-success btn-xs"><span class="glyphicon glyphicon-eye-open"></span></a>
                    <a href="<?php echo $_smarty_tpl->tpl_vars['fullurl']->value;?>
/edit/<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
" class="btn btn-warning btn-xs"><span class="glyphicon glyphicon-cog"></span></a>
                    <a href="<?php echo $_smarty_tpl->tpl_vars['fullurl']->value;?>
/transfer/<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-user"></span></a>
					<a href="<?php echo $_smarty_tpl->tpl_vars['fullurl']->value;?>
/html5.php?id=<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-phone"></span></a>
                    <a href="#" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#apiToolkit<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
"><span class="glyphicon glyphicon-briefcase"></span></a>
                    <a href="<?php echo $_smarty_tpl->tpl_vars['fullurl']->value;?>
/del/<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-trash"></span></a>
                </td>
            </tr>

            <!-- Chatbox HTML Codes -->
            <div class="modal fade" id="apiToolkit<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Chatbox HTML codes</h4>
                        </div>
                        <div class="modal-body">
                            <h5>Je chatbox op je website plaatsen</h5>
                            Als je je chatbox op je website wil plaatsen, kan je dit doen met het volgende stukje HTML code:
                            <blockquote><pre class="text-left">&lt;iframe src='<?php echo $_smarty_tpl->tpl_vars['fullurl']->value;?>
/chat.php?id=<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
' width='710' height='500' framespacing='0' frameborder='no' scrolling='no' &gt;&lt;/iframe&gt;</pre></blockquote>
							<h5>Je HTML5 chatbox op je website plaatsen</h5>
                            Als je je HTML5 chatbox op je website wil plaatsen, kan je dit doen met het volgende stukje HTML code:
                            <blockquote><pre class="text-left">&lt;iframe src='<?php echo $_smarty_tpl->tpl_vars['fullurl']->value;?>
/html5.php?id=<?php echo $_smarty_tpl->tpl_vars['ids']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
' width='710' height='500' framespacing='0' frameborder='no' scrolling='no' &gt;&lt;/iframe&gt;</pre></blockquote>

                            <h5>Het aantal chatters op je website laten zien</h5>
                            Om het aantal chatters dat zich in je chatbox bevindt op je site weer te geven, plaats je het volgende stukje javascript code tussen de <code>&lt;HEAD&gt;</code> tags van je webpagina.
<blockquote><pre class="text-left">&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  $(document).ready(function() {
    $.get('https://chattersworld.nl/usercount.php?channel=<?php echo $_smarty_tpl->tpl_vars['names']->value[(isset($_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index']) ? $_smarty_tpl->tpl_vars['__smarty_section_chat']->value['index'] : null)];?>
', function(data) {
      $("#users").html(data);
    }, 'text');
});
&lt;/script&gt;</pre></blockquote>
                            Zet vervolgens tussen de <code>&lt;BODY&gt;</code> tags op de plaats waar je het chattersaantal wil hebben een HTML-element met het id users, bijvoorbeeld:
                            <blockquote><pre class="text-left">&lt;p&gt;Aantal Chatters: &lt;span id="users"&gt;&lt;/span&gt;&lt;/p&gt;</pre></blockquote>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        <?php
}
}
if ($__section_chat_0_saved) {
$_smarty_tpl->tpl_vars['__smarty_section_chat'] = $__section_chat_0_saved;
}
?>
		
		</tbody>
    </table>
		
    <?php } else { ?>
        <a href="<?php echo $_smarty_tpl->tpl_vars['fullurl']->value;?>
/new" class="btn btn-success btn-xs"><span class="glyphicon glyphicon-plus"></span> Nieuwe chatbox aanmaken</a>
    <?php }?>

</div>
<?php }
}